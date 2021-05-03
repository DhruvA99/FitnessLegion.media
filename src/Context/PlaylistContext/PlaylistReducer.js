import * as actionTypes from "../ActionTypes";

const PlaylistReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.PLAYLIST_INITIALIZE:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case actionTypes.GET_PLAYLIST_SUCCESS:
      return {
        ...state,
        status: "getPlaylistSuccess",
        playlists: action.payload,
      };
    case actionTypes.GET_PLAYLIST_FAILED:
      return {
        ...state,
        status: "getPlaylistFailed",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default PlaylistReducer;
