import axios from "axios";
import * as actionTypes from "../ActionTypes";

export const playlistsInitialize = async (dispatch, uniqueAuthId, userId) => {
  try {
    dispatch({ type: actionTypes.PLAYLIST_INITIALIZE });
    let response = await axios.get("/playlists", {
      headers: {
        uniqueAuthId: `${uniqueAuthId}`,
        userId: `${userId}`,
      },
    });
    dispatch({
      type: actionTypes.GET_PLAYLIST_SUCCESS,
      payload: response.data.playlists,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PLAYLIST_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const createPlaylistandAdd = async (
  dispatch,
  lists,
  data,
  uniqueAuthId,
  userId
) => {
  try {
    dispatch({ type: actionTypes.PLAYLIST_INITIALIZE });
    let updatedList = [...lists, data];
    let response = await axios.post("/playlists", data, {
      headers: {
        uniqueAuthId: `${uniqueAuthId}`,
        userId: `${userId}`,
      },
    });
    dispatch({
      type: actionTypes.ADD_PLAYLIST_SUCCESS,
      payload: updatedList,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_PLAYLIST_FAILED,
      payload: error.response.data.message,
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

export const addToExistingPlaylist = async (
  dispatch,
  playlistId,
  videoId,
  playlists,
  uniqueAuthId,
  userId
) => {
  try {
    dispatch({ type: actionTypes.PLAYLIST_INITIALIZE });
    let updatedList;
    let response = await axios.post(
      `/playlists/${playlistId}`,
      {
        videoId: videoId,
      },
      {
        headers: {
          uniqueAuthId: `${uniqueAuthId}`,
          userId: `${userId}`,
        },
      }
    );
    updatedList = playlists.filter((item) => item._id !== playlistId);
    console.log(playlistId);
    console.log(updatedList);
    updatedList = [...updatedList, response.data.playlist];
    dispatch({
      type: actionTypes.ADD_PLAYLIST_SUCCESS,
      payload: updatedList,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_PLAYLIST_FAILED,
      payload: error.response.data.message,
    });
  }
};
