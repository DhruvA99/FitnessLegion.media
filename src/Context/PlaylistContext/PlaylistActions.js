import axios from "axios";
import * as actionTypes from "../ActionTypes";

export const playlistsInitialize = async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PLAYLIST_INITIALIZE });
    let response = await axios.get("/playlists");
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
    let response = await axios.post("/playlists", data);
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

export const deletePlaylist = async (dispatch, lists, id) => {
  try {
    console.log(id, " /// ", lists);
    dispatch({ type: actionTypes.PLAYLIST_INITIALIZE });
    let updatedList = lists.filter((item) => item.id !== id);
    console.log(updatedList);
    let response = await axios.delete(`/playlists/${id}`);
    dispatch({
      type: actionTypes.DELETE_PLAYLIST_SUCCESS,
      payload: updatedList,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_PLAYLIST_FAILED,
      payload: error.message,
    });
  }
};
