import React from "react";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile.js";


import "./index.css";


function App () {
  // const myNavBar = NavBar();
  return(
    <div class="main">
      <NavBar/>
      <UserProfile/>
    </div>
  )
};

export default App;