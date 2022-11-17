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
  const [loding , setloding] = useState(true);
  const provider = new GoogleAuthProvider();

  const signupemail = (email, password) => {
    setloding(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //update
  const updatename = (name) => {
    setloding(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  //log in
  const loginemail = (email, password) => {
    setloding(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  // usre get

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (createuser) => {
      setuser(createuser);
      setloding(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //sign out
  const signoutff =()=>{
    localStorage.removeItem('token')
    return signOut(auth)
  }

  const authinfo = {
    user,
    loding,
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
