import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCMRL-3vOaTpWe5nEwZZ0a13dJ0dDVq0oU",
  authDomain: "crown-db-334ad.firebaseapp.com",
  projectId: "crown-db-334ad",
  storageBucket: "crown-db-334ad.appspot.com",
  messagingSenderId: "1073357247435",
  appId: "1:1073357247435:web:3700c6b85fd6f9eed81c4e",
  measurementId: "G-6L9QPDGEX9",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
