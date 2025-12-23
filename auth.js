// ---------------------------
// FIREBASE INIT
// ---------------------------
const firebaseConfig = {
  apiKey: "AIzaSyBo9cfhTj2W7ikpdrqz6wAtSBisBo78OAc",
  authDomain: "xedge-1da3a.firebaseapp.com",
  projectId: "xedge-1da3a",
  storageBucket: "xedge-1da3a.appspot.com",
  messagingSenderId: "209657807080",
  appId: "1:209657807080:web:80180596d966b4667d895d",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();


// ---------------------------
// SIGN IN
// ---------------------------
function signInWithGoogle() {
  auth.signInWithPopup(provider).catch(() => {
    alert("Login failed.");
  });
}


// ---------------------------
// LOGOUT
// ---------------------------
function logoutUser() {
  auth.signOut();
}


// ---------------------------
// UTILITY — SAFE CLICK DROPDOWN
// ---------------------------
function setupProfileDropdown() {
  const profile = document.getElementById("nav-profile");
  const menu = document.getElementById("nav-user-menu");

  if (!profile || !menu) return;

  // Toggle on click
  profile.onclick = () => {
    menu.classList.toggle("hidden");
  };

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!profile.contains(e.target)) {
      menu.classList.add("hidden");
    }
  });
}


// ---------------------------
// AUTH STATE HANDLER
// RUNS ON EVERY PAGE
// ---------------------------
auth.onAuthStateChanged((user) => {
  const nav = document.getElementById("auth-area");
  const heroBtn = document.getElementById("hero-signin-btn");

  if (!nav) return; // not on pages without navbar

  if (user) {
    // Hide hero sign in button if exists
    if (heroBtn) heroBtn.classList.add("hidden");

    // Build profile UI
    nav.innerHTML = `
      <div id="nav-profile" class="relative">
        <img 
          src="${user.photoURL}" 
          class="w-10 h-10 rounded-full border border-gray-700 cursor-pointer"
        />

        <div id="nav-user-menu"
             class="hidden absolute right-0 mt-2 bg-gray-800 border border-gray-700 
                    rounded-xl p-3 w-40 shadow-xl z-50">
          <p class="text-white font-semibold">${user.displayName}</p>
          <p class="text-gray-400 text-xs mb-3">${user.email}</p>

          <button 
            onclick="logoutUser()" 
            class="w-full bg-red-600/20 hover:bg-red-600/30 text-red-400 p-2 rounded-lg">
            Logout
          </button>
        </div>
      </div>
    `;

    // Fix dropdown interaction
    setTimeout(() => setupProfileDropdown(), 100);

    // Save email (only if new)
    db.collection("users").doc(user.uid).set({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

  } else {
    // User not logged in → show Sign In button
    if (heroBtn) heroBtn.classList.remove("hidden");

    nav.innerHTML = `
      <button 
        onclick="signInWithGoogle()"
        class="border border-blue-500 px-6 py-2 rounded-full 
               font-semibold text-sm text-blue-300 hover:bg-blue-500/10 transition">
        Sign In
      </button>
    `;
  }
});
<script>
  let currentUser = null;
  const toolId =
    new URLSearchParams(window.location.search).get("tool");

  // Show form only if logged in
  auth.onAuthStateChanged(user => {
    currentUser = user;
    const form = document.getElementById("review-form");
    if (user && form) form.classList.remove("hidden");
  });

  // Submit / Update Review
  function submitReview() {
    if (!currentUser) {
      alert("Please sign in to leave a review");
      return;
    }

    const rating = Number(document.getElementById("review-rating").value);
    const text = document.getElementById("review-text").value.trim();

    if (!text) {
      alert("Please write a review");
      return;
    }

    const reviewId = `${toolId}_${currentUser.uid}`;

    db.collection("reviews").doc(reviewId).set({
      toolId,
      toolName: toolId,

      userId: currentUser.uid,
      userName: currentUser.displayName,
      userPhoto: currentUser.photoURL,

      rating,
      reviewText: text,

      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true })
    .then(() => {
      document.getElementById("review-text").value = "";
      loadReviews();
    });
  }

  // Load Reviews
  function loadReviews() {
    const list = document.getElementById("reviews-list");
    list.innerHTML = "";

    db.collection("reviews")
      .where("toolId", "==", toolId)
      .orderBy("updatedAt", "desc")
      .limit(20)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const r = doc.data();
          list.innerHTML += `
            <div class="bg-gray-800 border border-gray-700 rounded-xl p-4">
              <div class="flex items-center gap-3 mb-2">
                <img src="${r.userPhoto}" class="w-8 h-8 rounded-full">
                <span class="font-semibold">${r.userName}</span>
                <span class="ml-auto text-yellow-400">
                  ${"★".repeat(r.rating)}
                </span>
              </div>
              <p class="text-gray-300">${r.reviewText}</p>
            </div>
          `;
        });
      });
  }

  loadReviews();
</script>


