// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBh2ghJVk35i7wOSBn1Ha3qg4ZrFGwwghA",
  authDomain: "mrbin-3dc43.firebaseapp.com",
  projectId: "mrbin-3dc43",
  storageBucket: "mrbin-3dc43.firebasestorage.app",
  messagingSenderId: "447966458855",
  appId: "1:447966458855:web:21e2095a3a7077f1510342",
  measurementId: "G-T3W3KYBYRN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Login form submission
document.querySelector(".loginbox form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector("input[type='text']").value;
  const password = e.target.querySelector("input[type='password']").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      // Redirect or perform other actions
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
});

// Registration form submission
document.querySelector(".regbox form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector("input[type='email']").value;
  const password = e.target.querySelector("input[type='password']").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registration successful!");
      // Redirect or perform other actions
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
});
