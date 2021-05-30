import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6Mwso6NcYuS82RQGFmk2P88VIvxfYB8A",
  authDomain: "next-js-twitter-clone.firebaseapp.com",
  projectId: "next-js-twitter-clone",
  storageBucket: "next-js-twitter-clone.appspot.com",
  messagingSenderId: "836225459397",
  appId: "1:836225459397:web:b283b290807033ef0cfcac",
  measurementId: "G-PE8X1K87K5"
};

firebase.initializeApp(firebaseConfig)

export function loginWithGitHub (){
  const gitHubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(gitHubProvider)
}