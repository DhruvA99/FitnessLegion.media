import { createContext, useContext, useReducer } from "react";
import LatestVideoReducer from "./LatestVideoReducer";

const VideoListContext = createContext(null);

export const VideoListProvider = ({ children }) => {
  const initialState = {
    latestVideoList: [],
    status: "loading",
    error: null,
  };
  const [latestVideoListState, latestVideoListDispatch] = useReducer(
    LatestVideoReducer,
    initialState
  );
  return (
    <VideoListContext.Provider
      value={{ latestVideoListState, latestVideoListDispatch }}
    >
      {children}
    </VideoListContext.Provider>
  );
};

export const useVedioList = () => useContext(VideoListContext);
