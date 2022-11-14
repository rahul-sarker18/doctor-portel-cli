import React, { createContext } from "react";
import app from "../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContex = ({ children }) => {
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
  const loginemail = (email , password)=>{
    return signInWithEmailAndPassword(auth , email , password);
  }

  const authinfo = {
    signupemail,
    updatename,
    loginemail,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default UserContex;
