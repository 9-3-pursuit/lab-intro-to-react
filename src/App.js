import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js";
import Posts from "./Components/Posts.js";
import UserProfile from "./Components/UserProfile.js"
import Contacts from "./Components/Contacts.js"

function App () {
  return (
    <div>
      <NavBar />
      <Posts />
      <UserProfile />
      <Contacts />
    </div>

  );
};

export default App;

