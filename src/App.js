import React from "react";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";


import "./index.css";


function App () {
  return(
    <div class="main">
      <NavBar/>
      <UserProfile/>
      <Posts/>
    </div>
  )
};

export default App;