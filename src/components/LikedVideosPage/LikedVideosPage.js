import React, { useEffect } from "react";
import { useLikedVideo } from "../../Context/LikedVideosContext/LikedVideo-context";
import { likedVideoInitialize } from "../../Context/LikedVideosContext/LikedVideosActions";
import classes from "./LikedVideosPage.module.css";
import VideoListCard from "../VideoListCard/VideoListCard";

const LikedVideosPage = () => {
  const {
    likedVideoState: { status: likedVideoStatus, likedVideoList },
    likedVideoDispatch,
  } = useLikedVideo();
  useEffect(() => {
    likedVideoInitialize(likedVideoDispatch);
  }, []);
  let page = <></>;
  if (likedVideoStatus === "loading") {
    page = <p>Loading..</p>;
  }
  if (likedVideoStatus === "getLikedVideoSuccess") {
    page = (
      <>
        <div className={classes.main}>
          <div className={classes.main_heading_div}>
            <span className={classes.main_heading}>Liked Videos</span>
            <div className={classes.horizontalLine_90}></div>
          </div>
          <hr />
          <div className={classes.content}>
            {likedVideoList.length === 0 ? (
              <div className={classes.empty_list_div}>
                <span className={classes.empty_list}>
                  No Liked Videos Till Yet
                </span>
              </div>
            ) : null}

            {likedVideoList.map((item) => (
              <div className={classes.card_div}>
                <VideoListCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  return <>{page}</>;
};

export default LikedVideosPage;
