// ============================================================
//  Kikivient? — Configuration Firebase
//  Remplacez les valeurs "A_REMPLACER" par celles de votre
//  projet (console Firebase > Paramètres du projet > Vos applis).
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYBk_I17SwDLXR0mQ-DB5As49PDkVYif0",
  authDomain: "kikivient-1df76.firebaseapp.com",
  projectId: "kikivient-1df76",
  storageBucket: "kikivient-1df76.firebasestorage.app",
  messagingSenderId: "454866509268",
  appId: "1:454866509268:web:a912976cbe8ac2e583ca41"
};

// E-mails admin : sert uniquement à afficher les boutons de
// modération côté interface. La vraie sécurité est dans firestore.rules.
export const ADMIN_EMAILS = ["cattelain.vincent@gmail.com"];

export const app  = initializeApp(firebaseConfig);
export const db   = getFirestore(app);
export const auth = getAuth(app);
