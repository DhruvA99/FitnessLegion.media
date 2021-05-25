import axios from "axios";
import * as actionTypes from "../ActionTypes";

export const likedVideoInitialize = async (dispatch, uniqueAuthId, userId) => {
  try {
    dispatch({ type: actionTypes.LIKED_VIDEO_INITIALIZE });
    let response = await axios.get("/likedvideos", {
      headers: {
        uniqueAuthId: `${uniqueAuthId}`,
        userId: `${userId}`,
      },
    });
    dispatch({
      type: actionTypes.GET_LIKED_VIDEO_SUCCESS,
      payload: response.data.likedVideos,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_LIKED_VIDEO_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const likeVideoHandler = async (
  dispatch,
  data,
  list,
  uniqueAuthId,
  userId
) => {
  try {
    dispatch({ type: actionTypes.LIKED_VIDEO_INITIALIZE });
    let response = await axios.post(
      `/likedvideos/${data._id}`,
      {},
      {
        headers: {
          uniqueAuthId: `${uniqueAuthId}`,
          userId: `${userId}`,
        },
      }
    );
    let updatedList = [...list, data];
    dispatch({
      type: actionTypes.LIKED_VIDEO_SUCCESS,
      payload: updatedList,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LIKED_VIDEO_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const removeLikedVideo = async (
  dispatch,
  id,
  list,
  uniqueAuthId,
  userId
) => {
  try {
    dispatch({ type: actionTypes.LIKED_VIDEO_INITIALIZE });
    let response = await axios.delete(`/likedvideos/${id}`, {
      headers: {
        uniqueAuthId: `${uniqueAuthId}`,
        userId: `${userId}`,
      },
    });
    let updatedList = list.filter((item) => item._id !== id);
    dispatch({
      type: actionTypes.DELETE_LIKED_VIDEO_SUCCESS,
      payload: updatedList,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_LIKED_VIDEO_FAILED,
      payload: error.response.data.message,
    });
  }
};
