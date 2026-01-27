// ===========================
// FIREBASE INIT (SAFE)
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
// PROFILE DROPDOWN (CLICK ONLY)
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

auth.onAuthStateChanged((user) => {
  currentUser = user;

  const nav = document.getElementById("auth-area");
  const heroBtn = document.getElementById("hero-signin-btn");
  const reviewForm = document.getElementById("review-form");

  // ===========================
  // NAV + AUTH UI
  // ===========================
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

  // ===========================
  // REVIEW FORM VISIBILITY
  // ===========================
  if (reviewForm) {
    user
      ? reviewForm.classList.remove("hidden")
      : reviewForm.classList.add("hidden");
  }

  // ===========================
  // REVIEWS (AUTH SAFE)
  // ===========================
  loadReviews();
  checkIfUserReviewed();
});

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
  const ref = db.collection("reviews").doc(reviewId);

  ref.get().then(doc => {
    const isNew = !doc.exists;

    ref.set({
      toolId,
      userId: currentUser.uid,
      userName: currentUser.displayName,
      userPhoto: currentUser.photoURL,
      rating,
      reviewText: text,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      ...(isNew && { createdAt: firebase.firestore.FieldValue.serverTimestamp() })
    }, { merge: true }).then(() => {
      document.getElementById("review-text").value = "";
      document.getElementById("review-form")?.classList.add("hidden");
      loadReviews();
    });
  });
}

// ===========================
// LOAD REVIEWS + AVG RATING
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
        loadAdminRating();
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
    });
}

// ===========================
// ADMIN RATING FALLBACK
// ===========================
function loadAdminRating() {
  const avgEl = document.getElementById("avg-rating");
  const countEl = document.getElementById("rating-count");

  db.collection("tools").doc(toolId).get().then(doc => {
    if (doc.exists && doc.data().adminRating) {
      avgEl.textContent = `${doc.data().adminRating} ★`;
      countEl.textContent = "Admin rating";
    } else {
      avgEl.textContent = "—";
      countEl.textContent = "No reviews yet";
    }
  });
}

// ===========================
// AMAZON-STYLE TOGGLE
// ===========================
document.getElementById("toggle-reviews-btn")?.addEventListener("click", () => {
  const wrap = document.getElementById("reviews-wrapper");
  const text = document.getElementById("toggle-text");
  const arrow = document.getElementById("toggle-arrow");

  wrap.classList.toggle("hidden");
  const open = !wrap.classList.contains("hidden");

  text.textContent = open ? "Hide reviews" : "View all reviews";
  arrow.textContent = open ? "▲" : "▼";
});

// ===========================
// AUTO LOAD
// ===========================
document.addEventListener("DOMContentLoaded", loadReviews);
