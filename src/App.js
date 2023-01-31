import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts"
import Contacts from "./Components/Contacts";

function App () {
  return (
    <>

      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
      <p>Hello, world!!!</p>
    </>


  )
};

export default App;
