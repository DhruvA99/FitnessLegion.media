import React from "react";
import classes from "./PlaylistVideoCard.module.css";
import { useAuth } from "../../../Context/AuthContext/Auth-context";
import { deleteVideoFromPlaylist } from "../../../Context/PlaylistContext/PlaylistActions";
import { usePlaylist } from "../../../Context/PlaylistContext/Playlist-context";

const PlaylistVideoCard = ({ item, playlists, playlistId }) => {
  const {
    authState: { uniqueAuthId, userId },
    authDispatch,
  } = useAuth();
  const { playlistDispatch } = usePlaylist();
  const updatedName =
    item.name.length > 20 ? item.name.substring(0, 20) + "..." : item.name;
  return (
    <div className={classes.main}>
      <div className={classes.video_div}>
        <div className={classes.video}>
          <img className={classes.video_image} src={item.thumbnail} alt="img" />
        </div>
        <div className={classes.video_content}>
          <span className={classes.heading}>{updatedName}</span>
          <span className={classes.author}>{item.author}</span>
        </div>
      </div>
      <div
        className={classes.cancel_div}
        onClick={() =>
          deleteVideoFromPlaylist(
            playlistDispatch,
            playlistId,
            item._id,
            playlists,
            uniqueAuthId,
            userId
          )
        }
      >
        <i className="fa fa-times fa-2x" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default PlaylistVideoCard;
