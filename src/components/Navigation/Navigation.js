import React from "react";

const Navigation = () => {
  return (
    <>
      <div class="navigation_main">
        <div class="navigation_left_side">
          <div class="navigation_Hamburger_Icon">
            <div className="navigation_Hamburger_Icon_item"></div>
            <div className="navigation_Hamburger_Icon_item"></div>
            <div className="navigation_Hamburger_Icon_item"></div>
          </div>
          <div class="navigation_logo">
            <h3>Logo</h3>
          </div>
        </div>
        <div class="navigation_content">
          <span className="navigation_content_item">Component1</span>
          <span className="navigation_content_item">Component2</span>
          <span className="navigation_content_item">Component3</span>
          <i class="fas fa-shopping-cart"></i>
        </div>
        <div class="navigation_right_side"></div>
      </div>
    </>
  );
};

export default Navigation;
