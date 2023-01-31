import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js";
import Posts from "./Components/Posts.js";

import UserProfile from "./Components/UserProfile.js";
import Contacts from "./Components/Contacts.js";
import ContactUserCard from "./Components/ContactUserCard";


function App () {
  return (
  <div>
    <NavBar/>
    <p>This is My Navigation Bar</p>;
    <Posts/>
    <Contacts/>
    <UserProfile/>
    </div>
  )
}

export default App;
