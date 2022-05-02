// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app' // On Next.js also import getApps, getApp
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBVIrMZwcwbyXnbHjjhSIJZPL_Q7lnZrUY',
  authDomain: 'family-album-f83ac.firebaseapp.com',
  projectId: 'family-album-f83ac',
  storageBucket: 'family-album-f83ac.appspot.com',
  messagingSenderId: '173741548474',
  appId: '1:173741548474:web:ff0f2824a264a4bd79f383',
}

// Initialize Firebase
// SSR requires Singleton Pattern
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
