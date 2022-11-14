import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContex = ({ children }) => {
  const [user, setuser] = useState(null);
  const provider = new GoogleAuthProvider();

  const signupemail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //update
  const updatename = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  //log in
  const loginemail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // usre get

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (createuser) => {
      setuser(createuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //sign out
  const signoutff =()=>{
    return signOut(auth)
  }

  const authinfo = {
    user,
    signoutff,
    signupemail,
    updatename,
    loginemail,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default UserContex;
