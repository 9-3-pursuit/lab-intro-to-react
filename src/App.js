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
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  );
}

export default App;
