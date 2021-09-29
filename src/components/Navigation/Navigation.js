import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/Auth-context";
import { logout } from "../../Context/AuthContext/AuthActions";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {
    authState: { uniqueAuthId },
    authDispatch,
  } = useAuth();

  return (
    <>
      <div className={classes.nav_main}>
        <div className={classes.nav_content_large}>
          <div
            onClick={() => setSidebarOpen((sidebarOpen) => !sidebarOpen)}
            className={classes.hamburgerIcon}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className={classes.nav_heading}>Fitness Legion</span>
          <div className={classes.navigation_elements_content}>
            {uniqueAuthId !== null ? (
              <span
                className={classes.nav_content_item}
                onClick={() => logout(authDispatch)}
              >
                Logout
              </span>
            ) : (
              <>
                <NavLink
                  to="/login"
                  activeStyle={{ borderBottom: "3px solid red" }}
                  className={classes.nav_content_item}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  activeStyle={{ borderBottom: "3px solid red" }}
                  className={classes.nav_content_item}
                >
                  SignUp
                </NavLink>
              </>
            )}
          </div>
        </div>
        {sidebarOpen && (
          <div className={classes.sidebar_main_container}>
            <div
              className={classes.sidebar_backdrop}
              onClick={() => setSidebarOpen(false)}
            ></div>
            <div className={classes.sidebar_main}>
              <div className={classes.sidebar_content}>
                {uniqueAuthId !== null ? (
                  <>
                    <span
                      className={classes.navlink}
                      onClick={() => logout(authDispatch)}
                    >
                      Logout
                    </span>
                  </>
                ) : (
                  <>
                    <NavLink
                      activeClassName={classes.navlink_active}
                      to="/login"
                      className={classes.navlink}
                    >
                      Login
                    </NavLink>
                    <NavLink
                      activeClassName={classes.navlink_active}
                      to="/signup"
                      className={classes.navlink}
                    >
                      SignUp
                    </NavLink>
                  </>
                )}
                <NavLink
                  className={classes.navlink}
                  activeClassName={classes.navlink_active}
                  to="/"
                  end
                >
                  Home
                </NavLink>
                <NavLink
                  className={classes.navlink}
                  activeClassName={classes.navlink_active}
                  to="/likedvideos"
                >
                  Liked Videos
                </NavLink>
                <NavLink
                  className={classes.navlink}
                  activeClassName={classes.navlink_active}
                  to="/playlists"
                >
                  Playlists
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div className={`navigation_main ${classes.custom_nav_main}`}>
        <div className="navigation_left_side">
          <div className="navigation_Hamburger_Icon">
            <div className="navigation_Hamburger_Icon_item"></div>
            <div className="navigation_Hamburger_Icon_item"></div>
            <div className="navigation_Hamburger_Icon_item"></div>
          </div>
          <div className="navigation_logo">
            <h3>FitnessLegion</h3>
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
      </div> */}
    </>
  );
};

export default Navigation;
