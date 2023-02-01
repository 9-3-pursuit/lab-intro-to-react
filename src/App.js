import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js"
import Contact from "./Components/Contacts.js"
import Posts from "./Components/Posts.js"
import UserProfile from "./Components/UserProfile.js";

function App () {
  return ( 
    <div>
      <NavBar />
      <div className="container">
        <UserProfile />
        <Contact />
        <Posts /> 
       
      </div>
    </div>
  )  
};

export default App;
