// Importa las funciones que necesitas de los SDKs necesarios
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de tu aplicación Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAswJrDj39QMJK_B8ckv-0wfUS5AKdDeyU",
  authDomain: "tiendascorco.firebaseapp.com",
  projectId: "tiendascorco",
  storageBucket: "tiendascorco.appspot.com",
  messagingSenderId: "373539004864",
  appId: "1:373539004864:web:23c78527aa34dfcc376825",
  measurementId: "G-MFVHMQYEJH"
};
// Inicializa Firebase y obtén la instancia de Firestore
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Imprime la configuración de Firebase en la consola
console.log('Configuración de Firebase:', JSON.stringify(firebaseConfig, null, 2));
