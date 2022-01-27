//conecta ao db
//uso o /compat para evitar erros de compatibilidade

import firebase from "firebase/compat/app";

// Add the Firebase products that you want to use
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

firebase.initializeApp({
  apiKey: "AIzaSyDQtQtQiIjDUs2oNd0aFYsLT97yrgGYToo",
  authDomain: "wings-d53c0.firebaseapp.com",
  projectId: "wings-d53c0",
  storageBucket: "wings-d53c0.appspot.com",
  messagingSenderId: "693489427088",
  appId: "1:693489427088:web:7a45e080aff79f42572e15"
})

export { firebase }

export const auth = firebase.auth
export const db = firebase.firestore()