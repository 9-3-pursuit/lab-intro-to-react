import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

function App () {
  return(
    <section>
      <p>Hello, world!</p>;
      <NavBar />
      <Posts />
      <UserProfile />
      <Contacts/>
      </section>
  )
};

export default App;
