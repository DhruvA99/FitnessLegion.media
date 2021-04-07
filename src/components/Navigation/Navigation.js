import React from "react";

const Navigation = () => {
  return (
    <>
      <div className="navigation_main">
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
          <span className="navigation_content_item">Component1</span>
          <span className="navigation_content_item">Component2</span>
          <span className="navigation_content_item">Component3</span>
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className="navigation_right_side"></div>
      </div>
    </>
  );
};

export default Navigation;
