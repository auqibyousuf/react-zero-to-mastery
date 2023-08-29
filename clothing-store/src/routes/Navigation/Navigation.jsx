import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/User";
import "./navigation.scss";

import React, { useContext } from "react";

const NavigationComponent = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link">SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="auth">
              LOGIN
            </Link>
          )}
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationComponent;
