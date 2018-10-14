import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyADIUr4w9VjJ0dfHCNqAjufi0ZSaRVtSvI",
    authDomain: "sdhacks2018-219306.firebaseapp.com",
    databaseURL: "https://sdhacks2018-219306.firebaseio.com",
    projectId: "sdhacks2018-219306",
    storageBucket: "sdhacks2018-219306.appspot.com",
    messagingSenderId: "706836162937"
  };
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;