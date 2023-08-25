import React from "react";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormComponent from "../Form/FormComponent";
import "./RegisterComponent.scss";
import ButtonComponent from "../Button/ButtonComponent";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterComponent = () => {
  const [formfields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formfields;

  const resetFormFileds = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }

    try {
      const { user } = createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFileds();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("user alredy exists.");
      } else {
        console.log("user creation error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formfields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't Have an account</h2>
      <span className="text-center">Register</span>
      <form onSubmit={handleSubmit}>
        <FormComponent
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormComponent
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <ButtonComponent type="submit">Register</ButtonComponent>
      </form>
    </div>
  );
};

export default RegisterComponent;
