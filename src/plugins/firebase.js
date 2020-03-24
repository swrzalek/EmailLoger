/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
import * as firebase from 'firebase/app';
import { FIREBASE_CONFIG } from '../utils/config';
// import store from '../store';
import 'firebase/auth';
import 'firebase/firestore';
// import { UPDATE_USER } from '../store/actions.type';

firebase.initializeApp(FIREBASE_CONFIG);

export const db = firebase.firestore();
export const auth = firebase.auth();
export default { db, auth };
// export default {
//   // eslint-disable-next-line no-unused-vars
//   install: (Vue, options) => {
//     const auth = firebase.auth();
//     Vue.prototype.$auth = {
//       login: async (username, pass) => {
//         return auth.signInWithEmailAndPassword(username, pass);
//       },
//       logout: async () => {
//         await auth.signOut();
//       },
//     };
//     auth.onAuthStateChanged((user) => {
//       store.dispatch(UPDATE_USER, { user });
//     });
//   },
// };
