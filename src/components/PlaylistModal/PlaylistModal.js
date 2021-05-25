import classes from "./PlaylistModal.module.css";
import React, { useState } from "react";
import { usePlaylist } from "../../Context/PlaylistContext/Playlist-context";
import { createPlaylistandAdd } from "../../Context/PlaylistContext/PlaylistActions";
import { toast } from "react-toastify";

const PlaylistModal = (props) => {
  const [name, setName] = useState("");
  const {
    playlistState: { playlists, status },
    playlistDispatch,
  } = usePlaylist();

  const onChangeHandler = (e) => {
    setName(e.target.value);
  };
  const onNewPlaylistClickHandler = (e) => {
    const month = new Date().getMonth() + 1;
    const data = {
      playlistName: name,
      createdOn:
        new Date().getDate() + "/" + month + "/" + new Date().getFullYear(),
      videoList: [props.data],
    };
    createPlaylistandAdd(playlistDispatch, playlists, data);

    toast.success("New Playlist Created!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });

    props.modelCloseHandler();
  };

  return (
    <>
      <div className={props.isModalOpen ? classes.main : classes.hide_modal}>
        <div className={classes.modal_content}>
          <span className={classes.close} onClick={props.modelCloseHandler}>
            &times;
          </span>
          <div style={{ textAlign: "center" }}>OR</div>
          <div className={classes.model_content_div}>
            <div className={classes.new_playlist_div}>
              <span className={classes.new_playlist_heading}>
                Create a New Playlist
              </span>
              <div className={classes.new_playlist_input_div}>
                <input
                  className={classes.new_playlist_input}
                  onChange={(e) => onChangeHandler(e)}
                  type="text"
                />
              </div>
              <button
                style={{ width: "70%" }}
                className="btn btn_secondary"
                onClick={onNewPlaylistClickHandler}
              >
                Add to New Playlist
              </button>
            </div>
            <div className={classes.model_content_oldPlaylistDiv}>
              <span>Add to a already existing Playlist</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaylistModal;
