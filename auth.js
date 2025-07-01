
const auth = firebase.auth();

document.getElementById("signupForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Signup successful!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Signup failed: " + error.message);
    });
});

document.getElementById("loginForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "../homepage/index.html";  // 👈 Add this line
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Login successful
      window.location.href = "../homepage/index.html"; // Redirect to home
    })
    .catch((error) => {
      alert("Login Failed: " + error.message);
    });
});




