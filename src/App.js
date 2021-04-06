import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <div className="navigation_div">
        <Navigation />
      </div>
      <div className="main_page">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="main_content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
