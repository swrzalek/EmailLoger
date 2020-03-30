/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
import * as firebase from 'firebase/app';
import { FIREBASE_CONFIG } from '../utils/config';
// import store from '../store';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp(FIREBASE_CONFIG);

export const db = firebase.firestore();
export const auth = firebase.auth();
export default { db, auth };
