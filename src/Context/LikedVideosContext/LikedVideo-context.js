import { createContext, useContext, useReducer } from "react";
import LikedVideoReducer from "./LikedVideosReducer";

export const LikedVideoContext = createContext(null);

export const LikedVideoProvider = ({ children }) => {
  const initialState = {
    status: "loading",
    likedVideoList: [],
    error: null,
  };
  const [likedVideoState, likedVideoDispatch] = useReducer(
    LikedVideoReducer,
    initialState
  );
  return (
    <LikedVideoContext.Provider value={{ likedVideoState, likedVideoDispatch }}>
      {children}
    </LikedVideoContext.Provider>
  );
};

export const useLikedVideo = () => useContext(LikedVideoContext);
