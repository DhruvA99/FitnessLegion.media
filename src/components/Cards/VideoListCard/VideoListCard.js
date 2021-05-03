import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./VideoListCard.module.css";

const VideoListCard = ({ item }) => {
  const [thumbnailLink, setThumbnailLink] = useState(item.thumbnail);
  return (
    <>
      <Link to={`/watch/${item.id}`} className={classes.link}>
        <div className={`card3 ${classes.cardCustom}`}>
          <img
            className="card_image"
            onMouseOver={() => setThumbnailLink(item.animatedThumbnail)}
            onMouseOut={() => setThumbnailLink(item.thumbnail)}
            src={thumbnailLink}
            alt="img"
          />

          <div className="custom_button_play">
            <i className="fa fa-play" aria-hidden="true"></i>
          </div>

          <div className="card_content_2">
            <span className="card_content_heading3">{item.name}</span>
            <div className="card_content_secondaryDiv">
              <div className="avatar_normal">
                <img
                  className="avatar_image"
                  style={{ width: "30px", height: "30px" }}
                  src={item.channelImageURL}
                  alt="img"
                />
              </div>
              <div className="card_content_descriptionDiv">
                <div className="card_content_authorDescription">
                  <span className="card_content_authorName">{item.author}</span>
                  <span className="card_content_views">
                    {item.subscribers} Views
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoListCard;
