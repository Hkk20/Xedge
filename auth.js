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

