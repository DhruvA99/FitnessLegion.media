import * as actionTypes from "../ActionTypes";

const LatestVideoReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LATEST_VIDEOS_INITIALIZE:
      return {
        ...state,
        status: "loading",
      };
    case actionTypes.LATEST_VIDEO_SUCCESS:
      return {
        ...state,
        status: "getLatestVideoSuccess",
        latestVideoList: action.payload,
      };
    case actionTypes.LATEST_VIDEO_FAILED:
      return {
        ...state,
        status: "getLatestVideoFailed",
        error: action.payload,
      };

    default:
      return state;
  }
};

export default LatestVideoReducer;
