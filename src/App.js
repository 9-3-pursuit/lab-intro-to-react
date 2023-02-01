import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js"
import UserProfile from "./Components/UserProfile.js" 
 import Posts from "./Components/Posts.js"
import Post from "./Components/Post.js"
import Contacts from "./Components/Contacts.js"
import ContactUserCard from "./Components/ContactUserCard.js"

function App () {
  return (
    <div className="App">
      <NavBar />
 <p>Hello, world!</p>;

    <UserProfile />
    <Posts />
    <Post/>
    <Post/> 
    <Post/>
    <Contacts />
    <ContactUserCard />
    <ContactUserCard /> 
    <ContactUserCard />
    </div>
  );
};

export default App;
