import * as actionTypes from "../ActionTypes";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.AUTH_INITIALIZE:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        status: "authSuccess",
        userId: action.userId,
        uniqueAuthId: action.uniqueAuthId,
      };
    case actionTypes.AUTH_FAILED:
      return {
        ...state,
        status: "authFailed",
        error: action.payload,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        status: "authLogout",
        userId: null,
        uniqueAuthId: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
