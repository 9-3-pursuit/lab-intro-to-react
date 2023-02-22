import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js";
import Contacts from "./Components/Contacts.js"
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Post.js"

function App () {
  return(
    <div>
      <NavBar />
      <Contacts />
      <UserProfile />
      <Post />
    </div>
  )
};

export default App;
