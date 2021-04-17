import PlaylistReducer from "./PlaylistReducer";

const { createContext, useContext, useReducer } = require("react");

const PlaylistContext = createContext(null);

export const PlaylistProvider = ({ children }) => {
  const initialState = {
    status: "loading",
    playlists: [],
    error: null,
  };
  const [playlistState, playlistDispatch] = useReducer(
    PlaylistReducer,
    initialState
  );
  return <PlaylistContext.Provider>{children}</PlaylistContext.Provider>;
};

export const usePlaylist = () => useContext(PlaylistContext);
