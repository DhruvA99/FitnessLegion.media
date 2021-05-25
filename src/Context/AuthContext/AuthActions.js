import axios from "axios";
import * as actionTypes from "../ActionTypes";

export const signupUser = async (dispatch, username, email, password) => {
  try {
    const data = { username, email, password };
    dispatch({
      type: actionTypes.AUTH_INITIALIZE,
    });
    const response = await axios.post("", data);
    localStorage.setItem("uniqueAuthId", response.data.uniqueAuthId);
    localStorage.setItem("userId", response.data.userId);
    dispatch({
      type: actionTypes.AUTH_SUCCESS,
      userId: response.data.userId,
      uniqueAuthId: response.data.uniqueAuthId,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.AUTH_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const checkAuthState = (dispatch) => {
  const uniqueAuthId = localStorage.getItem("uniqueAuthId");
  if (!uniqueAuthId) {
    localStorage.removeItem("uniqueAuthId");
    localStorage.removeItem("userId");
  } else {
    const userId = localStorage.getItem("userId");
    dispatch({
      type: actionTypes.AUTH_SUCCESS,
      uniqueAuthId: uniqueAuthId,
      userId: userId,
    });
  }
};

export const logout = (dispatch) => {
  dispatch({
    type: actionTypes.AUTH_LOGOUT,
  });
  localStorage.removeItem("uniqueAuthId");
  localStorage.removeItem("userId");
};

export const loginUser = async (dispatch, email, password) => {
  try {
    const data = { email, password };
    dispatch({
      type: actionTypes.AUTH_INITIALIZE,
    });
    const response = await axios.post("/login", data);
    localStorage.setItem("uniqueAuthId", response.data.uniqueAuthId);
    localStorage.setItem("userId", response.data.userId);
    dispatch({
      type: actionTypes.AUTH_SUCCESS,
      userId: response.data.userId,
      uniqueAuthId: response.data.uniqueAuthId,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.AUTH_FAILED,
      payload: error.response.data.message,
    });
  }
};
