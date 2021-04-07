import axios from "axios";
import React, { useEffect } from "react";
import { useVedioList } from "../../Context/LatestVideoContext/LatestVideo-context";
import { latestVideoInitialize } from "../../Context/LatestVideoContext/LatestVideoActions";
import VideoListCard from "../VideoListCard/VideoListCard";
import classes from "./Home.module.css";

const Home = () => {
  const {
    latestVideoListState: { status, latestVideoList, error },
    latestVideoListDispatch,
  } = useVedioList();
  useEffect(() => {
    latestVideoInitialize(latestVideoListDispatch);
  }, []);
  let page = <p></p>;
  if (status === "loading") {
    page = <p>Loading....</p>;
  }

  if (status === "getLatestVideoSuccess" || status === "getLatestVideoFailed") {
    page = (
      <div className={classes.main}>
        <div className={classes.latest_section_div}>
          <div className={classes.latest_section_heading}></div>
          <div className={classes.latest_section_content}>
            {latestVideoList.map((item) => (
              <VideoListCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className={classes.saved_video_div}></div>
        <div className={classes.custom_playlist_div}></div>
      </div>
    );
  }
  return <>{page}</>;
};

export default Home;
