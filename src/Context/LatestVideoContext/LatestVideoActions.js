import axios from "axios";
import * as actionTypes from "../ActionTypes";

export const latestVideoInitialize = async (dispatch) => {
  try {
    dispatch({ type: actionTypes.LATEST_VIDEOS_INITIALIZE });
    let response = await axios.get(`/api/videos`);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.LATEST_VIDEO_SUCCESS,
        payload: response.data.videos,
      });
    }
  } catch (error) {
    dispatch({ type: actionTypes.LATEST_VIDEO_FAILED, payload: error.message });
  }
};
