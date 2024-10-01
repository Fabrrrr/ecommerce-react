import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
   doc,
   setDoc,
   getDoc
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4ERPjlB73ZiUQVVbwa5Cv8xzuPRXCSs8",
    authDomain: "react-proj-db-5484b.firebaseapp.com",
    projectId: "react-proj-db-5484b",
    storageBucket: "react-proj-db-5484b.appspot.com",
    messagingSenderId: "343130520483",
    appId: "1:343130520483:web:50cf32b5a37e0d14c8f816"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Create google auth and make a mandatory account selection
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth(); // only way to get a valid user
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const db = getFirestore();

// Get the sign in object and process it
export const createUserDocumentFromAuth = async (userAuth) => {
// Authentication object -> Firebase Document REPRESENTATION/REFERENCE at the specified absolute path.
    const userDocRef = doc(db, 'users', userAuth.uid);  

    const userData = await getDoc(userDocRef); // Reads the document referred to by this DocumentReference.

    //if user data does NOT exist
    if(!userData.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(err) {
            console.log('error creating the user', err.message);
        }
    }

    //if user data exists
    return userDocRef;
}
// you can/may have multiple providers (authentication providers such as Google, Microsoft,GitHub)
// but only 1 authentication method. providers are a GloogleAuth class.

// firebase creates a unique id for every object.
// if we try and get a object that doesnt exist in a table that doesnt exists
// google creates it virtually for us to manage and use and SET if we want to keep it
// just because we are not changing anything that exists in the db.