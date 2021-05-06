import React from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {
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
          <span className="navigation_content_item">Login</span>
          <span className="navigation_content_item">SignUp</span>
        </div>
      </div>
    </>
  );
};

export default Navigation;
