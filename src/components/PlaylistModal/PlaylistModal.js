import classes from "./PlaylistModal.module.css";
import React, { useEffect, useState } from "react";
import { usePlaylist } from "../../Context/PlaylistContext/Playlist-context";
import {
  addToExistingPlaylist,
  createPlaylistandAdd,
  playlistsInitialize,
} from "../../Context/PlaylistContext/PlaylistActions";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/AuthContext/Auth-context";

const PlaylistModal = (props) => {
  const [name, setName] = useState("");
  const {
    playlistState: { playlists, status: playlistStatus },
    playlistDispatch,
  } = usePlaylist();
  const {
    authState: { uniqueAuthId, userId },
  } = useAuth();

  useEffect(() => {
    playlistsInitialize(playlistDispatch, uniqueAuthId, userId);
  }, []);

  const onChangeHandler = (e) => {
    setName(e.target.value);
  };
  const onNewPlaylistClickHandler = (e) => {
    const month = new Date().getMonth() + 1;
    const data = {
      playlistName: name,
      createdOn:
        new Date().getDate() + "/" + month + "/" + new Date().getFullYear(),
      videos: [props.data],
    };
    createPlaylistandAdd(
      playlistDispatch,
      playlists,
      data,
      uniqueAuthId,
      userId
    );

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
            <div className={classes.model_content_old_playlist_div}>
              <span className={classes.old_playlist_heading}>
                Add to an already Existing Playlist
              </span>
              <div className={classes.old_playlist_list_div}>
                {playlists?.map((item) => {
                  return (
                    <div className={classes.old_playlist_list_item}>
                      <span className={classes.old_playlist_list_heading}>
                        {item.playlistName}
                      </span>
                      {item.videos.find(
                        (video) => video._id === props.data._id
                      ) ? (
                        <button
                          className={`btn btn_disabled ${classes.custom_add_button}`}
                          disabled
                        >
                          Added
                        </button>
                      ) : (
                        <button
                          className={`btn btn_default ${classes.custom_add_button}`}
                          onClick={() =>
                            addToExistingPlaylist(
                              playlistDispatch,
                              item._id,
                              props.data._id,
                              playlists,
                              uniqueAuthId,
                              userId
                            )
                          }
                        >
                          {playlistStatus === "loading" ? "Adding.." : "Add"}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaylistModal;
