import React from "react";
import "./index.css";
import Posts from "./Components/Posts"
import NavBar from "./Components/NavBar"; 
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile";

function App () {
  return (
  <div className="main-app"> 
    <NavBar />
    <UserProfile />
    <Contacts />
    <Posts />
  </div>
  )
};

export default App;