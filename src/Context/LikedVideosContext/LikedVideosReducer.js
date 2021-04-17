import * as actionTypes from "../ActionTypes";

const LikedVideoReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LIKED_VIDEO_INITIALIZE:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case actionTypes.GET_LIKED_VIDEO_SUCCESS:
      return {
        ...state,
        status: "getLikedVideoSuccess",
        likedVideoList: action.payload,
      };
    case actionTypes.GET_LIKED_VIDEO_FAILED:
      return {
        ...state,
        status: "getLikedVideoFailed",
        error: action.payload,
      };
    case actionTypes.LIKED_VIDEO_SUCCESS:
      return {
        ...state,
        status: "likedVideoSuccess",
        likedVideoList: action.payload,
      };
    case actionTypes.LIKED_VIDEO_FAILED:
      return {
        ...state,
        status: "likedVideoFailed",
        error: action.payload,
      };
    case actionTypes.DELETE_LIKED_VIDEO_SUCCESS:
      return {
        ...state,
        status: "deleteLikedVIdeoSuccess",
        likedVideoList: action.payload,
      };
    case actionTypes.DELETE_LIKED_VIDEO_FAILED:
      return {
        ...state,
        status: "deleteLikedVideoFailed",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default LikedVideoReducer;
