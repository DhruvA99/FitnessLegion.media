import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/Auth-context";
import { logout } from "../../Context/AuthContext/AuthActions";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const {
    authState: { uniqueAuthId },
    authDispatch,
  } = useAuth();
  return (
    <>
      <div className={`navigation_main ${classes.custom_nav_main}`}>
        <div className="navigation_left_side">
          <div className="navigation_Hamburger_Icon">
            <div className="navigation_Hamburger_Icon_item"></div>
            <div className="navigation_Hamburger_Icon_item"></div>
            <div className="navigation_Hamburger_Icon_item"></div>
          </div>
          <div className="navigation_logo">
            <h3>Logo</h3>
          </div>
        </div>
        <div className="navigation_content">
          {uniqueAuthId !== null ? (
            <>
              <span
                className="navigation_content_item"
                onClick={() => logout(authDispatch)}
              >
                Logout
              </span>
            </>
          ) : (
            <>
              <NavLink to="/login" className={classes.customNavigationItem}>
                <span className="navigation_content_item">Login</span>
              </NavLink>
              <NavLink to="/signup" className={classes.customNavigationItem}>
                <span className="navigation_content_item">SignUp</span>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
