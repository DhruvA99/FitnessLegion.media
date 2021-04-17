import axios from "axios";
import * as actionTypes from "../ActionTypes";

export const playlistsInitialize = async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PLAYLIST_INITIALIZE });
    let response = await axios.get("/api/playlists");
    dispatch({
      type: actionTypes.GET_PLAYLIST_SUCCESS,
      payload: response.data.playlists,
    });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PLAYLIST_FAILED, payload: error.message });
  }
};

export const createPlaylist = async (dispatch, data) => {
  try {
    dispatch({ type: actionTypes.PLAYLIST_INITIALIZE });
  } catch (error) {}
};
