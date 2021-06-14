import React, { useState, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { auth, provider } from '../firebase/firebaseConfig';
import { usersCollections } from '../firebase/firestoreUtils';

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signUp = (email, password, firstName, lastName) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) =>
        usersCollections.doc(user.user.uid).set({
          email,
          firstName,
          lastName,
          password,
          orders: [],
        })
      )
      .catch((err) => console.log(err));
  };

  const logIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  };

  const logOut = () => {
    auth.signOut();
  };

  const signUpWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((user) => {
        if (user.additionalUserInfo.isNewUser) {
          addNewUser(user);
        }
      })
      .catch((error) => console.log(error));
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
            setCurrentUser(doc.data());
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
