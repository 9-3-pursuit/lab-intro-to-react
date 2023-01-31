import React from "react";
import "./index.css";

import NavBar from "./Components/NavBar.js"
import Posts from "./Components/Posts.js"
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile";

function App () {
  return (
    <div>
      <NavBar/>
      <UserProfile/>
      <Posts/>
      <Contacts/>
    </div>

  )

};

export default App;
