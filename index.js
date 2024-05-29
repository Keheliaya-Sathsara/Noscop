import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import {getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

    
        const firebaseConfig = {
            apiKey: "AIzaSyBRkrZwIAKfurAlMHoyp3PqVXFhQ9MENtk",
            authDomain: "noscop-dd2e1.firebaseapp.com",
            projectId: "noscop-dd2e1",
            storageBucket: "noscop-dd2e1.appspot.com",
            messagingSenderId: "254621124805",
            appId: "1:254621124805:web:19857ecbbe5832d8e6c8ac",
            measurementId: "G-JRDS4CJ8C8"
            };

    // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);

            const auth=getAuth();
            const db=getFirestore();

            onAuthStateChanged(auth, (user)=>{
                const loggedInUserId=localStorage.getItem('loggedInUserId');
            })

            const logoutButton=document.getElementById('logout');

            logoutButton.addEventListener('click',()=>{
                localStorage.removeItem('loggedInUserId');
                signOut(auth)
                .then(()=>{
                    window.location.href='regsign.html';
                })
                .catch((error)=>{
                    console.error('Error Signin out:', error);
                })
            })

            