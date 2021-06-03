import { firestore } from './firebaseConfig';

export const usersCollections = firestore.collection('users');
