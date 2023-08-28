import React from "react";
import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormComponent from "../Form/FormComponent";
import "./Login.scss";
import ButtonComponent from "../Button/ButtonComponent";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formfields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formfields;

  const resetFormFileds = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      console.log(response);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorect password for email");
          break;
        case "auth/user-not-found":
          alert("No user found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formfields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already Have an account</h2>
      <span>Sign In with Email and Password</span>

      <form onSubmit={handleSubmit}>
        <FormComponent
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormComponent
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <ButtonComponent type="submit">Sign In</ButtonComponent>
          <ButtonComponent
            buttonType="google"
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default Login;
