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

export const createPlaylistandAdd = async (dispatch, lists, data) => {
  try {
    dispatch({ type: actionTypes.PLAYLIST_INITIALIZE });
    let updatedList = [...lists, data];
    let response = await axios.post("/api/playlists", data);
    dispatch({
      type: actionTypes.ADD_PLAYLIST_SUCCESS,
      payload: updatedList,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_PLAYLIST_FAILED,
      payload: error.message,
    });
  }
};

export const deletePlaylist = async (dispatch, lists, data) => {
  try {
  } catch (error) {}
};
