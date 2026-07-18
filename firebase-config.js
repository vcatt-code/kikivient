// ============================================================
//  Kikivient? — Configuration Firebase
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey:            "AIzaSyBYBk_I17SwDLXR0mQ-DB5As49PDkVYif0",
  authDomain:        "kikivient-1df76.firebaseapp.com",
  projectId:         "kikivient-1df76",
  storageBucket:     "kikivient-1df76.firebasestorage.app",
  messagingSenderId: "454866509268",
  appId:             "1:454866509268:web:a912976cbe8ac2e583ca41"
};

// E-mails admin. Ajoutez une adresse en décommentant la 2e ligne.
// Doit rester identique à la liste dans firestore.rules.
export const ADMIN_EMAILS = [
  "cattelain.vincent@gmail.com",
  "simon.lericque@wanadoo.fr",
];

export const app  = initializeApp(firebaseConfig);
export const db   = getFirestore(app);
export const auth = getAuth(app);
