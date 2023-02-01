import React from "react";
import "./index.css";
import Post from "./Components/Posts"
import NavBar from "./Components/NavBar"
import UserProfile from "./Components/UserProfile"
import Contacts from "./Components/Contacts"

function App ()  {
  // return <p>Hello, world!</p>;
  return <div>
    <NavBar/>
    <UserProfile/>
    <main>
      <Post/>
    </main>
    <Contacts/>
  </div>

};

export default App;
