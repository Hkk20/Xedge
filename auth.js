// ===========================
// FIREBASE INIT (v8 SAFE)
// ===========================
const firebaseConfig = {
  apiKey: "AIzaSyBo9cfhTj2W7ikpdrqz6wAtSBisBo78OAc",
  authDomain: "xedge-1da3a.firebaseapp.com",
  projectId: "xedge-1da3a",
  storageBucket: "xedge-1da3a.appspot.com",
  messagingSenderId: "209657807080",
  appId: "1:209657807080:web:80180596d966b4667d895d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

// ===========================
// GLOBAL STATE
// ===========================
let currentUser = null;
const toolId =
  new URLSearchParams(window.location.search).get("tool") ||
  document.getElementById("tool-name")?.textContent?.trim() ||
  null;

// ===========================
// AUTH ACTIONS
// ===========================
function signInWithGoogle() {
  auth.signInWithPopup(provider).catch(() => {
    alert("Login failed.");
  });
}

function logoutUser() {
  auth.signOut();
}

// ===========================
// PROFILE DROPDOWN
// ===========================
function setupProfileDropdown() {
  const profile = document.getElementById("nav-profile");
  const menu = document.getElementById("nav-user-menu");

  if (!profile || !menu) return;

  profile.onclick = (e) => {
    e.stopPropagation();
    menu.classList.toggle("hidden");
  };

  document.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
}

// ===========================
// AUTH STATE (ONLY PLACE USER IS USED)
// ===========================
auth.onAuthStateChanged((user) => {
  currentUser = user;

  const nav = document.getElementById("auth-area");
  const heroBtn = document.getElementById("hero-signin-btn");
  const reviewForm = document.getElementById("review-form");

  // ---------- NAV ----------
  if (nav) {
    if (user) {
      if (heroBtn) heroBtn.classList.add("hidden");

      nav.innerHTML = `
        <div id="nav-profile" class="relative">
          <img src="${user.photoURL}"
               class="w-10 h-10 rounded-full border border-gray-700 cursor-pointer"/>
          <div id="nav-user-menu"
               class="hidden absolute right-0 mt-2 bg-gray-800 border border-gray-700
                      rounded-xl p-3 w-40 shadow-xl z-50">
            <p class="text-white font-semibold">${user.displayName}</p>
            <p class="text-gray-400 text-xs mb-3">${user.email}</p>
            <button onclick="logoutUser()"
                    class="w-full bg-red-600/20 hover:bg-red-600/30
                           text-red-400 p-2 rounded-lg">
              Logout
            </button>
          </div>
        </div>
      `;

      setTimeout(setupProfileDropdown, 50);

      // Safe user write
      db.collection("users").doc(user.uid).set({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

    } else {
      if (heroBtn) heroBtn.classList.remove("hidden");

      nav.innerHTML = `
        <button onclick="signInWithGoogle()"
          class="border border-blue-500 px-6 py-2 rounded-full
                 font-semibold text-sm text-blue-300 hover:bg-blue-500/10 transition">
          Sign In
        </button>
      `;
    }
  }

  // ---------- REVIEW FORM ----------
  if (reviewForm) {
    user
      ? reviewForm.classList.remove("hidden")
      : reviewForm.classList.add("hidden");
  }

  // ---------- SAFE LOADS ----------
  loadReviews();
  checkIfUserReviewed();
});

// ===========================
// CHECK IF USER REVIEWED
// ===========================
function checkIfUserReviewed() {
  if (!currentUser || !toolId) return;

  const form = document.getElementById("review-form");
  const reviewId = `${toolId}_${currentUser.uid}`;

  db.collection("reviews").doc(reviewId).get()
    .then(doc => {
      if (doc.exists && form) form.classList.add("hidden");
    })
    .catch(() => {});
}

// ===========================
// SUBMIT REVIEW
// ===========================
function submitReview() {
  if (!currentUser || !toolId) {
    alert("Login required.");
    return;
  }

  const rating = Number(document.getElementById("review-rating").value);
  const text = document.getElementById("review-text").value.trim();
  if (!text) return alert("Write a review first.");

  const reviewId = `${toolId}_${currentUser.uid}`;

  db.collection("reviews").doc(reviewId).set({
    toolId,
    userId: currentUser.uid,
    userName: currentUser.displayName,
    userPhoto: currentUser.photoURL,
    rating,
    reviewText: text,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true }).then(() => {
    document.getElementById("review-text").value = "";
    document.getElementById("review-form")?.classList.add("hidden");
    loadReviews();
  });
}

// ===========================
// LOAD REVIEWS (CRASH SAFE)
// ===========================
function loadReviews() {
  if (!toolId) return;

  const list = document.getElementById("reviews-list");
  const avgEl = document.getElementById("avg-rating");
  const countEl = document.getElementById("rating-count");

  if (!list) return;
  list.innerHTML = "";

  let total = 0;
  let count = 0;

  db.collection("reviews")
    .where("toolId", "==", toolId)
    .orderBy("updatedAt", "desc")
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        avgEl.textContent = "—";
        countEl.textContent = "No reviews yet";
        return;
      }

      snapshot.forEach(doc => {
        const r = doc.data();
        total += r.rating;
        count++;

        list.innerHTML += `
          <div class="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <div class="flex items-center gap-3 mb-2">
              <img src="${r.userPhoto}" class="w-8 h-8 rounded-full">
              <span class="font-semibold">${r.userName}</span>
              <span class="ml-auto text-yellow-400">
                ${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}
              </span>
            </div>
            <p class="text-gray-300">${r.reviewText}</p>
          </div>
        `;
      });

      avgEl.textContent = `${(total / count).toFixed(1)} ★`;
      countEl.textContent = `${count} reviews`;
    })
    .catch(err => {
      console.warn("Reviews unavailable:", err.code);
    });
}
