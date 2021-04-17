import React from "react";
import { Link } from "react-router-dom";
import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <>
      <div className={classes.main}>
        <Link to="/">Home</Link>
        <Link to="/likedVideos">Liked Videos</Link>
      </div>
    </>
  );
};

export default SideBar;
