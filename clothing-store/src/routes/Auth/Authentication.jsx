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
import Login from "../../components/Login/Login";
import "./Authentication.scss";

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
    <div className="authentication-container">
      <Login />
      <RegisterComponent />
    </div>
  );
};

export default LoginComponent;
