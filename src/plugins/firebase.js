import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCiLTZ83uthw9rXkSZT578f1ECVHndQryY",
  authDomain: "todo-list-56a97.firebaseapp.com",
  projectId: "todo-list-56a97",
  storageBucket: "todo-list-56a97.appspot.com",
  messagingSenderId: "923921938060",
  appId: "1:923921938060:web:711d76eeabe57c0fd5ada9"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}