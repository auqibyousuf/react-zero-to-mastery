import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const LoginComponent = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign In Page</h1>;
      <button onClick={logGoogleUser}>Log in with Google</button>
    </div>
  );
};

export default LoginComponent;
