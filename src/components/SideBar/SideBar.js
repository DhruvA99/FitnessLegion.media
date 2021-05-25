import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <>
      <div className={classes.main}>
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
    </>
  );
};

export default SideBar;
