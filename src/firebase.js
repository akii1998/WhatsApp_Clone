import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDN7rRLPSpXTsOH8FP9RhhIxYvAcwklwXk",
    authDomain: "whatcloneapp.firebaseapp.com",
    projectId: "whatcloneapp",
    storageBucket: "whatcloneapp.appspot.com",
    messagingSenderId: "322082718273",
    appId: "1:322082718273:web:28f6dc27ce8e1a3a9ebcc0",
    measurementId: "G-N921SVXXS6"
  };

  const app =firebase.initializeApp(firebaseConfig)

  const auth =firebase.auth();

  const db =app.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  export { auth , googleProvider}

  export default db;
