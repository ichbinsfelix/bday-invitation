import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCUEm5-X_23OX89VkHlomIYhjfiJlhFKeQ",
    authDomain: "bday-invitation.firebaseapp.com",
    projectId: "bday-invitation",
    storageBucket: "bday-invitation.appspot.com",
    messagingSenderId: "467482541470",
    appId: "1:467482541470:web:11b6d46b7ce73844e5aa8f"
})

const db = firebaseApp.firestore()

export { db }