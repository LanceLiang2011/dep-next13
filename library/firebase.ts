// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCqLCnvbzHdbQfnKg5CQHGQ01YKq0RmdY0',
  authDomain: 'disordered-eating-project.firebaseapp.com',
  projectId: 'disordered-eating-project',
  storageBucket: 'disordered-eating-project.appspot.com',
  messagingSenderId: '697485702136',
  appId: '1:697485702136:web:9eeb017e1cad94a1209c0d',
  measurementId: 'G-PXWNMFTRD2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Signin with Google
const GoogleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async (): Promise<void> => {
  try {
    const res = await signInWithPopup(auth, GoogleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (error: any) {
    console.error(error);
    alert(error.message);
  }
};

// signin with email and password
export const logInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    console.error(error);
    alert(error.message);
  }
};

export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (error: any) {
    console.error(error);
    alert(error.message);
  }
};

// Reset email password
export const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (error: any) {
    console.error(error);
    alert(error.message);
  }
};

// Logout
export const logout = () => {
  signOut(auth);
};
