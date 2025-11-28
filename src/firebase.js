import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};
console.log('Configuración de Firebase:', firebaseConfig);

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const saveForm = async (email, tipoC, descrp) => {
    const formUsers = ref(db, 'form');
    const user = push(formUsers);
    try {
        await set(user, {
            correo: email,
            caso: tipoC,
            contexto: descrp
        });

        return {
            success: true,
            message: "Todo bien"
        };

    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
};

const getForm = async () => {
    const form = ref(db, 'form');
    try {
        const ans = await get(form);

        return {
            success: ans.exists(),
            data: ans.val()
        }

    } catch (error) {
        return {
            success: false,
            data: "No hay datos"
        }
    }
};

export { saveForm, getForm };