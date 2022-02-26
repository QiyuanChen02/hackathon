// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCi5-duEZYABuaHRLOjT2N4km2rVja24Zw',
    authDomain: 'hackathon-project-c108f.firebaseapp.com',
    projectId: 'hackathon-project-c108f',
    storageBucket: 'hackathon-project-c108f.appspot.com',
    messagingSenderId: '388468059118',
    appId: '1:388468059118:web:59baf0e97fa80b1dd83cff',
}

const firebase = initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore()

export { firebase, auth, db }