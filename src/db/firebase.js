/* eslint-disable no-undef */
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const db = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
});

export const auth = db.auth();
export default db.firestore();
export const fieldPath = firebase.firestore.FieldPath;

const { Timestamp } = firebase.firestore;
export { Timestamp };
