import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, WriteBatch } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMIsRFqiWIrSYNRYaYx0hWWRvEs0eTJi8",
  authDomain: "crwn-clothing-db-a3b40.firebaseapp.com",
  projectId: "crwn-clothing-db-a3b40",
  storageBucket: "crwn-clothing-db-a3b40.appspot.com",
  messagingSenderId: "678094569143",
  appId: "1:678094569143:web:e25565c7bba9f218e29732",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();


export const SignInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const SignInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore();
export const AddCollectionandDocument = async (collectionKey,ObjectsToAdd) => {
const collectionRef = collection(db,collectionKey);
const batch = writeBatch(db);

ObjectsToAdd.forEach((Object)=>{
const docRef = doc(collectionRef,Object.title.toLowerCase());
batch.set(docRef,Object);
});
await batch.commit();
console.log("Done");
}

export const CreateUserDocumentfromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef);
  const userSnapsort = await getDoc(userDocRef);
  //console.log(userSnapsort);
  //console.log(userSnapsort.exists());
  if (!userSnapsort.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (err) {
      console.log("Error Adding database");
    }
  }
  return userDocRef;
};

export const CreateAuthUserUsingEmailAndPassword = async(email,password) => {
  if(!email || !password) return;
return await createUserWithEmailAndPassword(auth,email,password)
}
export const SignUserUsingEmailAndPassword = async(email,password) => {
  if(!email || !password) return;
return await signInWithEmailAndPassword(auth,email,password);
}
export const UserSignOut = async() => await signOut(auth);

export const onAuthStateChangedListner = (callBack) => onAuthStateChanged(auth,callBack);

