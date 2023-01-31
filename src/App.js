import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js"
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts.js"
import Contacts from "./Components/Contacts";

function App () {
  return (
    <div>
    <NavBar/>
    <UserProfile/>
    <Posts/>
    <Contacts/>
  </div>
  );
};

export default App;
