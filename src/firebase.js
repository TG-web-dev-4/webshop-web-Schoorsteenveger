import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

// const firebaseConfig = {

//     apiKey: "AIzaSyB6LT7vHd0jZFyXdD6jjeaR8q3DZ0QlIJ8",

//     authDomain: "stokerestate.firebaseapp.com",

//     projectId: "stokerestate",

//     storageBucket: "stokerestate.appspot.com",

//     messagingSenderId: "216601045470",

// appId: "1:216601045470:web:1fa26292c017a1c1cc154f",

//     measurementId: "G-2D50T1MPVS"

// };

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STOREBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, user => {
    if (user === 'true') {
        console.log('logged in!')
    } else {
        console.log('very not logged in, no user')
    }
})

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.log(err)
    }
};

const logInWithEmailAndPassword = async (auth, email, password) => {
    console.log("huh nog steeds een string?", process.env.REACT_APP_FIREBASE_KEY)

    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        console.log(res)
        // navigate ergens heen
    } catch (err) {
        console.log(err)
        alert("user not found");
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    console.log("Huh", process.env.REACT_APP_FIREBASE_APP_ID)
    try {
        const res = await createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        // alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.log(err)
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    signInWithGoogle,
    signInWithEmailAndPassword,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};