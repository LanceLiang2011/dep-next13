// Import the functions you need from the SDKs you need
import { Diary } from '@/app/journal/diary/[id]/page';
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
  doc,
  getDoc,
  deleteDoc,
  Timestamp,
  setDoc,
  collectionGroup,
  updateDoc,
} from 'firebase/firestore';
import { toast } from 'react-hot-toast';
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
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
    toast.success('Log in successfully');
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
    toast.success('Log in successfully');
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
    const userDocRef = doc(db, 'users', user.uid);
    await setDoc(userDocRef, {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
    toast.success('Sign up successfully');
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
  toast.success('Log out successfully');
};

// get uer data
export const getUserData = async (uid: string): Promise<any> => {
  const usersRef = collection(db, 'users');
  const queryRef = query(usersRef, where('uid', '==', uid));
  const querySnapshot = await getDocs(queryRef);
  if (querySnapshot.empty) {
    return null;
  }
  const user = querySnapshot.docs[0].data();

  return user;
};

// get user doc id
export const getUserDocId = async (uid: string) => {
  // Get a reference to the user's document in the Firestore collection
  const userRef = doc(getFirestore(), 'users', uid);

  // Get the user's document from Firestore
  const userDoc = await getDoc(userRef);

  // Get the user's document ID
  const userId = userDoc.id;
  return userId;
};

// add diary to db
export const addDiaryToFirestore = async (diary: any) => {
  const diaryRef = doc(db, 'diary', diary.id);
  const newDiaryEntryRef = await setDoc(diaryRef, diary);
};

// read a user's diary
export async function getDiaryEntriesForUser(userId: string) {
  const diaryRef = collection(db, 'diary');

  const q = query(diaryRef, where('uid', '==', userId));
  const querySnapshot = await getDocs(q);

  const diaryEntries: any = [];

  querySnapshot.forEach((doc) => {
    const entry = doc.data();
    entry.id = doc.id;
    diaryEntries.push(entry);
  });

  return diaryEntries;
}

// delete a diary using it's id:
export async function deleteDiary(diaryId: string): Promise<void> {
  try {
    // Create a reference to the diary document to be deleted
    const diaryRef = doc(db, 'diary', diaryId);

    // Delete the diary document
    await deleteDoc(diaryRef);
    console.log(`Diary with ID ${diaryId} has been deleted.`);
  } catch (error) {
    console.error('Error deleting diary: ', error);
    throw new Error('Error deleting diary');
  }
}

// get diary by id
export const getDiaryById = async (diaryId: string) => {
  const diaryRef = doc(db, 'diary', diaryId);
  const diarySnapshot = await getDoc(diaryRef);
  if (diarySnapshot.exists()) {
    return { id: diarySnapshot.id, ...(diarySnapshot.data() as Diary) };
  } else {
    toast.error(
      'The diary is on the way saving to the database. Please refresh the page later '
    );
    throw new Error(`Diary with ID ${diaryId} does not exist`);
  }
};

// convert firestore datetime
export function convertTimestamp(timestamp: Timestamp) {
  let date = timestamp.toDate().toDateString();

  return date;
}

// add user's goal to firestore given userid and the goal object
export const addGoalToFirestore = async (uid: string, goal: any) => {
  const goalRef = doc(collection(db, 'users', uid, 'goals'), goal.goalId);
  await setDoc(goalRef, goal);
};

// get user's goal data given uid
export const getUserGoalsById = async (uid: string) => {
  const q = query(collectionGroup(db, 'goals'), where('uid', '==', uid));
  const querySnapshot = await getDocs(q);
  const goals = querySnapshot.docs.map((doc) => ({
    goalId: doc.id,
    ...doc.data(),
  }));
  return goals;
};

// delete a goal using ID
export const deleteGoalById = async (uid: string, goalId: string) => {
  const goalDocRef = doc(collection(db, 'users', uid, 'goals'), goalId);
  deleteDoc(goalDocRef)
    .then(() => {
      console.log('Diary document deleted successfully.');
    })
    .catch((error) => {
      console.error('Error deleting diary document: ', error);
    });
};

// adding new thinking pattern to user
export const addPatternToUsers = async (uid: string, pattern: any) => {
  const patternRef = doc(collection(db, 'users', uid, 'patterns'), pattern.id);
  await setDoc(patternRef, pattern);
};

// getting thinking pattern of a user
export const getPatternOfUser = async (uid: string) => {
  const userDocRef = doc(db, 'users', uid);
  const patternCollectionRef = collection(userDocRef, 'patterns');
  const querySnapshot = await getDocs(patternCollectionRef);
  const patterns = querySnapshot.docs.map((doc) => doc.data());
  return patterns[0];

  // const q = query(collectionGroup(db, 'patterns'), where('uid', '==', uid));
  // const querySnapshot = await getDocs(q);
  // const patterns = querySnapshot.docs.map((doc) => doc.data());
  // return patterns[0];
};

// editing thinking patterns
export const changeUserPattern = async (
  uid: string,
  patternId: string,
  newPattern: any
) => {
  const patternRef = doc(collection(db, 'users', uid, 'patterns'), patternId);
  await updateDoc(patternRef, newPattern);
};

// delete thinking pattern
export const deleteUserPattern = async (uid: string, id: string) => {
  const patternRef = doc(collection(db, 'users', uid, 'patterns'), id);
  await deleteDoc(patternRef);
};

// add new thought
export const addThoughtToUser = async (uid: string, thought: any) => {
  const thoughtRef = doc(collection(db, 'users', uid, 'thoughts'), thought.id);
  await setDoc(thoughtRef, thought);
};

// get all thoughts
export const getThoughtsOfUser = async (uid: string) => {
  const userDocRef = doc(db, 'users', uid);
  const thoughtsCollectionRef = collection(userDocRef, 'thoughts');
  const querySnapshot = await getDocs(thoughtsCollectionRef);
  const thoughts = querySnapshot.docs.map((doc) => doc.data());
  return thoughts;
};

export const deleteThoughtById = async (uid: string, id: string) => {
  const thoughtRef = doc(collection(db, 'users', uid, 'thoughts'), id);
  await deleteDoc(thoughtRef);
};
