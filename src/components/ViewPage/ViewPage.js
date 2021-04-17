import classes from "./ViewPage.module.css";
import React, { useEffect, useState } from "react";
import { useVedioList } from "../../Context/LatestVideoContext/LatestVideo-context";
import { useParams } from "react-router-dom";
import axios from "axios";
import { latestVideoInitialize } from "../../Context/LatestVideoContext/LatestVideoActions";
import {
  likedVideoInitialize,
  likeVideoHandler,
  removeLikedVideo,
} from "../../Context/LikedVideosContext/LikedVideosActions";
import { useLikedVideo } from "../../Context/LikedVideosContext/LikedVideo-context";

const ViewPage = () => {
  const [data, setData] = useState(null);
  const [relatedVideoData, setRelatedVideoData] = useState(null);
  const [videoLiked, setVideoLiked] = useState(false);
  const { videoId } = useParams();
  const {
    latestVideoListState: { status: latestVideoStatus, latestVideoList },
    latestVideoListDispatch,
  } = useVedioList();
  const {
    likedVideoState: { status: likedVideoStatus, likedVideoList },
    likedVideoDispatch,
  } = useLikedVideo();

  useEffect(() => {
    let relatedVideoListData = [];
    if (latestVideoStatus === "getLatestVideoSuccess") {
      let videoData = latestVideoList.find((item) => item.id === videoId);
      setData(videoData);

      relatedVideoListData = latestVideoList.filter(
        (item) => item.category === videoData.category
      );
      setRelatedVideoData(relatedVideoListData);
    } else {
      latestVideoInitialize(latestVideoListDispatch);
    }
  }, [latestVideoList]);

  useEffect(() => {
    if (likedVideoStatus === "getLikedVideoSuccess" && data !== null) {
      likedVideoList.find((item) => item.id === data.id) !== undefined
        ? setVideoLiked(true)
        : setVideoLiked(false);
    }
    if (likedVideoStatus === "loading") {
      likedVideoInitialize(likedVideoDispatch);
    }
  }, [likedVideoStatus, data]);

  let page = <p>Loading...</p>;
  if (data) {
    page = (
      <>
        <div className={classes.main}>
          <div className={classes.section_display}>
            <div className={classes.video_player_div}>
              <iframe
                width="1024"
                className={classes.player}
                height="576"
                src={data.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={classes.info_banner}>
              <span className={classes.info_banner_item}>
                <i className="fa fa-eye" aria-hidden="true"></i> {data.views}{" "}
                views
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className={classes.info_banner_item}>
                <i className="fa fa-thumbs-up" aria-hidden="true"></i> &nbsp;
                {data.likes}
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className={classes.info_banner_item}>
                <i className="fa fa-thumbs-down" aria-hidden="true"></i>&nbsp;
                {data.dislikes}
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className={classes.info_banner_item}>
                <i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;
                {data.durationMinutes + ":" + data.durationSeconds}
              </span>
            </div>
            <div className={classes.videoInformation}>
              <span className={classes.heading}>{data.name}</span>
              <div className={classes.video_content}>
                <div className={classes.author_information}>
                  <div className="avatar_normal">
                    <img
                      className="avatar_image"
                      style={{ width: "30px", height: "30px" }}
                      src={data.channelImageURL}
                      alt="img"
                    />
                  </div>
                  <div className={classes.author_name_div}>
                    <span className={classes.author_name}>{data.author}</span>
                    <span className={classes.subscribers}>
                      {data.subscribers} Subscribers
                    </span>
                  </div>
                </div>

                <div className={classes.action_buttons_div}>
                  {!videoLiked ? (
                    <i
                      className="fa fa-thumbs-o-up fa-2x toolTip"
                      aria-hidden="true"
                      onClick={() => {
                        likeVideoHandler(likedVideoDispatch, data);
                        setVideoLiked((videoLiked) => !videoLiked);
                      }}
                    >
                      <span
                        className={`toolTipText_top ${classes.tooltip_text}`}
                      >
                        i like this
                      </span>
                    </i>
                  ) : (
                    <i
                      className="fa fa-thumbs-up fa-2x toolTip"
                      aria-hidden="true"
                      onClick={() => {
                        removeLikedVideo(
                          likedVideoDispatch,
                          data.id,
                          likedVideoList
                        );
                        setVideoLiked((videoLiked) => !videoLiked);
                      }}
                    >
                      <span
                        className={`toolTipText_top ${classes.tooltip_text}`}
                      >
                        unlike
                      </span>
                    </i>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={classes.section_reccomendation}></div>
          <div className={classes.section_comments}></div>
        </div>
      </>
    );
  }

  return <>{page}</>;
};

export default ViewPage;
