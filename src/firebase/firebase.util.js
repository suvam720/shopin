
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = ({
    apiKey: "AIzaSyCPEeXQOTJQ-S0td90gvh1HaMq72e13XtM",
    authDomain: "web-dev-8d6d3.firebaseapp.com",
    projectId: "web-dev-8d6d3",
    storageBucket: "web-dev-8d6d3.appspot.com",
    messagingSenderId: "393327851656",
    appId: "1:393327851656:web:f03256d1a09df24b65873d",
    measurementId: "G-7P7Y0FDTT9"
  });

  
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
 if(!userAuth) return;

 const userRef = firestore.doc(`users/${userAuth.uid}`);

 const snapShot = await userRef.get();

 if(!snapShot.exists){
   const { displayName, email} = userAuth;
   const createdAt = new Date();


   try{
     await userRef.set({
       displayName,
       email,
       createdAt,
       ...additionalData
     })

   }catch(error){
     console.log('error', error.message);
   }

 }
 return userRef;



}





export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;