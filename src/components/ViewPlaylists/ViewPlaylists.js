import React, { useEffect } from "react";
import { usePlaylist } from "../../Context/PlaylistContext/Playlist-context";
import { playlistsInitialize } from "../../Context/PlaylistContext/PlaylistActions";
import PlaylistVideoCard from "../Cards/PlaylistVideoCard/PlaylistVideoCard";

import classes from "./ViewPlaylists.module.css";

export default function ViewPlaylists() {
  const {
    playlistState: { playlists, status },
    playlistDispatch,
  } = usePlaylist();
  useEffect(() => {
    playlistsInitialize(playlistDispatch);
  }, []);
  let page = <p>Loading...</p>;
  if (status === "getPlaylistSuccess") {
    page = (
      <div className={classes.main}>
        {playlists.length === 0 ? (
          <div className={classes.empty_list_div}>
            <span className={classes.empty_list}>No Playlists Till Yet</span>
          </div>
        ) : null}
        {playlists.map((item) => (
          <div className={classes.playlist_main}>
            <span>{item.playlistName}</span>
            {item.videoList.map((videoData) => (
              <div className={classes.videoCard_div}>
                <PlaylistVideoCard item={videoData} />
                <div className={classes.videoCard_cancel}></div>
              </div>
            ))}
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
