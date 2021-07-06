import React, { useState, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { auth, provider } from '../firebase/firebaseConfig';
import { usersCollections } from '../firebase/firestoreUtils';
import swalAlert from '../utils/sweetalert2';

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signUp = (email, password, firstName, lastName) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) =>
        usersCollections
          .doc(user.user.uid)
          .set({
            email,
            firstName,
            lastName,
            password,
            orders: [],
          })
          .then(() => swalAlert('Firestore', 'Account created'))
          .catch((err) => console.log('Document writing error: ', err))
      )
      .catch((err) => console.log('Create user error: ', err));
  };

  const logIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) =>
        usersCollections
          .doc(user.user.uid)
          .get()
          .then((doc) =>
            swalAlert(doc.data().firstName, "You've just logged in")
          )
      )
      .catch(() => swalAlert('Error', 'Wrong email or password', 'error'));
  };

  const logOut = () => {
    auth.signOut().then(() => swalAlert('Logout', "You've just logged out"));
  };

  const signUpWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((user) => {
        if (user.additionalUserInfo.isNewUser) {
          addNewUser(user);
        }
        swalAlert(
          user.additionalUserInfo.profile.given_name,
          'Succesfully logged in'
        );
      })
      .catch((err) => console.log('Gmail login error :', err));
  };

  const addNewUser = (user) => {
    const { email, given_name, family_name } = user.additionalUserInfo.profile;
    usersCollections.doc(user.user.uid).set({
      email: email,
      firstName: given_name,
      lastName: family_name,
      orders: [],
    });
  };

  useEffect(() => {
    const checkUser = auth.onAuthStateChanged((user) => {
      if (user) {
        const userDoc = usersCollections.doc(user.uid);
        userDoc.get().then((doc) => {
          if (doc.exists) {
            setCurrentUser({ ...doc.data(), id: user.uid });
          }
        });
      } else {
        setCurrentUser(null);
      }
    });

    return checkUser;
  }, []);

  const value = { currentUser, logIn, logOut, signUp, signUpWithGoogle };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
