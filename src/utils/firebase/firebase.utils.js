// @ts-nocheck
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyADkoigBHQ-L6LFHbwME6f1lT1lqv45jsg',
  authDomain: 'crwn-clothing-db-42a8d.firebaseapp.com',
  projectId: 'crwn-clothing-db-42a8d',
  storageBucket: 'crwn-clothing-db-42a8d.appspot.com',
  messagingSenderId: '933840531654',
  appId: '1:933840531654:web:3a294218fb338d576827c7'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('error craeting the user', error.message);
    }
  }

  return userDocRef;
};
