import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCb5F0Df1Q_PhiSZ1a1rBvSytwdoVkoucs",
  authDomain: "nohscop.firebaseapp.com",
  projectId: "nohscop",
  storageBucket: "nohscop.appspot.com",
  messagingSenderId: "837208792147",
  appId: "1:837208792147:web:f13f2faddb4a3788933aa6",
  measurementId: "G-ZR6VBKK2ZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const db = getFirestore();

// Check authentication state and redirect if not logged in
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Redirect to login page
    window.location.href = "landing.html";
  }
});

const logoutButton = document.getElementById("logout");

logoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location.href = "landing.html";
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
});

// Background slider
const images = [
  "assets/background1.png",
  "assets/background2.png",
  "assets/background3.png",
];

let currentIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000); // Change image every 5 seconds

window.addEventListener("scroll", function () {
  document.body.classList.toggle("scrolled", window.scrollY > 50);
});

// Initialize with the first background image
document.body.style.backgroundImage = `url(${images[0]})`;
