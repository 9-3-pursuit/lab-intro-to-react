import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts"
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";

function App () {
  return (
    
    <section>
      <NavBar />;
      <UserProfile />
      <Posts />
      <Contacts/>
      </section>
  )
};

export default App;
