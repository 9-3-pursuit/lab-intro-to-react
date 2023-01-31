import React from "react";
import "./index.css";

import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <div className="main-container">
      <NavBar />
      <div className="main-content-container">
        <div className="main-content">
          <UserProfile />
          <br />
          <Posts />
        </div>
        <div className="main-content-aside">
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
