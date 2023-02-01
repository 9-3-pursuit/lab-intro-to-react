import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js";
import Contacts from "./Components/Contacts.js"
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <UserProfile/>
      <Posts/>
      <Contacts/>
    </React.Fragment>
  )
};

export default App;
