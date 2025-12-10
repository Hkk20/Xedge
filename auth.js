<script>
// ---- UI ELEMENT ----
const authArea = document.getElementById("auth-area");

// ---- Google Sign In ----
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then((result) => {
      console.log("Logged in:", result.user);
    })
    .catch((err) => console.error("Login error:", err));
}

// ---- Logout ----
function logoutUser() {
  auth.signOut().then(() => {
    console.log("Logged out");
  });
}

// ---- Monitor Login State ----
auth.onAuthStateChanged((user) => {
  if (user) {
    // USER LOGGED IN UI
    authArea.innerHTML = `
      <div class="relative">
        <img 
          src="${user.photoURL}" 
          class="w-10 h-10 rounded-full cursor-pointer border border-blue-500"
          onclick="toggleUserMenu()"
        />
        
        <div id="user-menu" class="hidden absolute right-0 mt-2 bg-gray-800 border border-gray-700 rounded-xl w-40 shadow-xl">
          <div class="px-4 py-2 text-gray-300 border-b border-gray-700">
            ${user.displayName}
          </div>
          <button 
            onclick="logoutUser()" 
            class="w-full text-left px-4 py-2 hover:bg-gray-700">
            Logout
          </button>
        </div>
      </div>
    `;
  } else {
    // USER LOGGED OUT UI
    authArea.innerHTML = `
      <a 
        onclick="signInWithGoogle()" 
        class="border border-blue-500 px-6 py-2 rounded-full font-semibold text-blue-300 hover:bg-blue-500/10 cursor-pointer">
        Sign Up
      </a>
    `;
  }
});

// ---- Toggle Dropdown ----
function toggleUserMenu() {
  const menu = document.getElementById("user-menu");
  if (!menu) return;
  menu.classList.toggle("hidden");
}
</script>
