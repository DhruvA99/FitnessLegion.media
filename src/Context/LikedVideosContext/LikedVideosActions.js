import axios from "axios";
import * as actionTypes from "../ActionTypes";

export const likedVideoInitialize = async (dispatch) => {
  try {
    dispatch({ type: actionTypes.LIKED_VIDEO_INITIALIZE });
    let response = await axios.get("/api/likedVideos");
    dispatch({
      type: actionTypes.GET_LIKED_VIDEO_SUCCESS,
      payload: response.data.likedVideos,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_LIKED_VIDEO_FAILED,
      payload: error.message,
    });
  }
};

export const likeVideoHandler = async (dispatch, data, list) => {
  try {
    dispatch({ type: actionTypes.LIKED_VIDEO_INITIALIZE });
    let response = await axios.post("/api/likedVideos", data);
    let updatedList = [...list, data];
    dispatch({
      type: actionTypes.LIKED_VIDEO_SUCCESS,
      payload: updatedList,
    });
  } catch (error) {
    dispatch({ type: actionTypes.LIKED_VIDEO_FAILED, payload: error.message });
  }
};

export const removeLikedVideo = async (dispatch, id, list) => {
  try {
    dispatch({ type: actionTypes.LIKED_VIDEO_INITIALIZE });
    let response = await axios.delete(`/api/likedVideos/${id}`);
    let updatedList = list.filter((item) => item.id !== id);
    dispatch({
      type: actionTypes.DELETE_LIKED_VIDEO_SUCCESS,
      payload: updatedList,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_LIKED_VIDEO_FAILED,
      payload: error.message,
    });
  }
};
