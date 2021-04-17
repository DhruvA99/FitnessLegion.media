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

makeServer({ environment: "development" });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoListProvider>
        <LikedVideoProvider>
          <App />
        </LikedVideoProvider>
      </VideoListProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
