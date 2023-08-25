import React from "react";
import "./ButtonComponent.scss";

const Button_Type_Classes = {
  google: "google-sign-in",
  inverted: "inverted",
};
const ButtonComponent = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={` button-container ${Button_Type_Classes[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
