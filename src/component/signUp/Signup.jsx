import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../config/firebase";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInWithGoogle = () => {
    try {
      signInWithPopup(auth, provider).then((result) => {
        console.log(result);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));
    // updateProfile(auth.currentUser, {
    //   displayName: "azizouertani",
    //   photoURL: "197",

    // }).then((result) => console.log(result));
    sendEmailVerification(auth.currentUser);
    console.log(auth.currentUser);
  };
  return (
    <>
      <div>SiggnUp</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={signInWithGoogle}>Sign In with google</button>
    </>
  );
};

export default Signup;
