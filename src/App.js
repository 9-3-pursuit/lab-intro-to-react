import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile"

function App () {
  return (
    <div>  
      <NavBar /> 
      <main> 
        <UserProfile />
        <Contacts />
        <Posts />
      </main>
    </div>
  );
};

export default App;
