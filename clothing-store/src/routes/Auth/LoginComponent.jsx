import React from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import RegisterComponent from "../../components/Register/RegisterComponent";

const LoginComponent = () => {
  useEffect(() => {
    async function getData() {
      const redirectUser = await getRedirectResult(auth);
      if (redirectUser) {
        const userDocRef = await createUserDocumentFromAuth(redirectUser.user);
      }
    }
    getData();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Log in with Google</button>
      <button onClick={signInWithGoogleRedirect}>Log in with Redirect</button>
      <RegisterComponent />
    </div>
  );
};

export default LoginComponent;
