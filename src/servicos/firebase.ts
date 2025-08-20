import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCz0KH9eUQcOcNDgNCXkD42may6GEmPg",
  authDomain: "cidade-alerta-51696.firebaseapp.com",
  projectId: "cidade-alerta-51696",
  storageBucket: "cidade-alerta-51696.appspot.com",
  messagingSenderId: "106637796979",
  appId: "1:106637796979:web:4ad9ec710b5bade5912706",
  measurementId: "G-WEGM1HVYRT"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta serviços que vamos usar
export const auth = getAuth(app);
export const db = getFirestore(app);
