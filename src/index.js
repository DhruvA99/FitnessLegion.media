import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoListProvider } from "./Context/LatestVideoContext/LatestVideo-context";
import "font-awesome/css/font-awesome.min.css";
import { LikedVideoProvider } from "./Context/LikedVideosContext/LikedVideo-context";
import { PlaylistProvider } from "./Context/PlaylistContext/Playlist-context";
import { AuthProvider } from "./Context/AuthContext/Auth-context";
import axios from "axios";
axios.defaults.baseURL = "https://agile-brook-61279.herokuapp.com/api";
// axios.defaults.baseURL = "http://localhost:3005/api";
// makeServer({ environment: "development" });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideoListProvider>
          <LikedVideoProvider>
            <PlaylistProvider>
              <App />
            </PlaylistProvider>
          </LikedVideoProvider>
        </VideoListProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
