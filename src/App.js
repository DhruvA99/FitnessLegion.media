import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import SideBar from "./components/SideBar/SideBar";
import ViewPage from "./components/ViewPage/ViewPage";
import LikedVideosPage from "./components/LikedVideosPage/LikedVideosPage";
import ViewPlaylists from "./components/ViewPlaylists/ViewPlaylists";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Signup from "./components/Auth/Signup/Signup";
import Login from "./components/Auth/Login/Login";
import AuthRoute from "./assets/images/protectedRoute/AuthRoute";
import ProtectedRoute from "./assets/images/protectedRoute/ProtectedRoute";
import { useAuth } from "./Context/AuthContext/Auth-context";
import { useEffect } from "react";
import { checkAuthState } from "./Context/AuthContext/AuthActions";
import axios from "axios";

function App() {
  const { authDispatch } = useAuth();
  useEffect(() => {
    checkAuthState(authDispatch);
  }, []);
  const {
    authState: { uniqueAuthId, userId },
  } = useAuth();
  // axios.defaults.headers.common["uniqueAuthId"] = uniqueAuthId; // for all requests
  // axios.defaults.headers.common["userId"] = userId; // for all requests
  return (
    <div className="App">
      <div className="navigation_div">
        <Navigation />
      </div>
      <div className="main_page">
        <div className="sidebar">
          <SideBar />
        </div>
      </div>
      <div className="main_content">
        <Routes>
          <Route path="/" element={<Home />} />
          <ProtectedRoute
            component={LikedVideosPage}
            redirectTo="/login"
            isAuth={uniqueAuthId !== null}
            path="/likedvideos"
          />
          <ProtectedRoute
            component={ViewPlaylists}
            redirectTo="/login"
            isAuth={uniqueAuthId !== null}
            path="/playlists"
          />
          <AuthRoute
            component={Login}
            redirectTo="/"
            isAuth={uniqueAuthId !== null}
            path="/login"
          />
          <AuthRoute
            component={Signup}
            redirectTo="/"
            isAuth={uniqueAuthId !== null}
            path="/signup"
          />
          <Route path="/watch/:videoId" element={<ViewPage />} />
          {/* <Route path="/likedvideos" element={<LikedVideosPage />} />
          <Route path="/playlists" element={<ViewPlaylists />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
