import React, { useEffect } from "react";
import { usePlaylist } from "../../Context/PlaylistContext/Playlist-context";
import {
  deletePlaylist,
  playlistsInitialize,
} from "../../Context/PlaylistContext/PlaylistActions";
import PlaylistVideoCard from "../Cards/PlaylistVideoCard/PlaylistVideoCard";
import { useAuth } from "../../Context/AuthContext/Auth-context";
import classes from "./ViewPlaylists.module.css";

export default function ViewPlaylists() {
  const {
    playlistState: { playlists, status },
    playlistDispatch,
  } = usePlaylist();
  const {
    authState: { uniqueAuthId, userId },
    authDispatch,
  } = useAuth();
  useEffect(() => {
    playlistsInitialize(playlistDispatch, uniqueAuthId, userId);
  }, []);
  console.log(status);
  let page = <p>Loading...</p>;
  if (status === "getPlaylistSuccess" || status === "deletePlaylistSuccess") {
    page = (
      <div className={classes.main}>
        {playlists.length === 0 ? (
          <div className={classes.empty_list_div}>
            <span className={classes.empty_list}>No Playlists Till Yet</span>
          </div>
        ) : null}
        {playlists.map((item) => (
          <div className={classes.playlist_main}>
            <span className={classes.playlist_name}>{item.playlistName}</span>
            <div className={classes.playlist_action_button_div}>
              <span>Created On :{item.createdOn}</span>
              <i
                className="fa fa-trash"
                aria-hidden="true"
                onClick={() =>
                  deletePlaylist(playlistDispatch, playlists, item.id)
                }
              ></i>
            </div>
            <div className={classes.horizontalLine_90}></div>
            <div className={classes.videoCard_div}>
              {item.videos?.map((videoData) => (
                <PlaylistVideoCard item={videoData} />
              ))}{" "}
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <div className={classes.main_heading_div}>
        <span className={classes.main_heading}>Your Playlists</span>
        <div className={classes.horizontalLine_90}></div>
      </div>
      {page}
    </div>
  );
}
