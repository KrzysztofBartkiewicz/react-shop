import { firestore } from './firebaseConfig';

export const usersCollections = firestore.collection('users');
export const allOrdersCollection = firestore.collection('allOrders');
