/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { auth, db } from '../plugins/firebase';
import { hashEmail } from './helper';

export async function fbsSignIn(email, password) {
  return auth.signInWithEmailAndPassword(email, password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(`[FBService] ${errorCode} ${errorMessage}`);
    });
}

export async function fbsCreateUser(email, password) {
  return auth.createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(`[FBService] ${errorCode} ${errorMessage}`);
    });
}

export async function fbsSaveEmailRecipient(recipentEmail) {
  const hashedEmail = hashEmail(recipentEmail);
  return db.collection('logs').doc(hashedEmail).set({
    created_by: 'me',
    email: recipentEmail,
    date_created: Date.now(),
    open: false,
    opentime: null,
    userAgent: null,
  });
}

export async function fbsCheckPermission(id) {
  return db.collection('logs')
    .doc(id)
    .get()
    .then((doc) => (!!doc.exists));
}

export async function fbsLogOpen(id) {
  return db.collection('logs').doc(id).update({
    open: true,
    open_time: Date.now(),
    userAgent: window.navigator.userAgent,
  });
}

export async function fbsFetchLogs() {
  const snapshot = await db.collection('logs').get();
  return snapshot.docs.map((doc) => doc.data());
}