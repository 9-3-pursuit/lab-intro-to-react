import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile.js";
import Contacts from "./Components/Contacts.js";
import ContactUserCard from "./Components/ContactUserCard.js";
import Post from "./Components/Post.js";
import Posts from "./Components/Posts.js";

function App () {
  const myNavBar = NavBar()
  const myUserProfile = UserProfile()
  const myContacts = Contacts()
  // const myContactUserCard = ContactUserCard()
  // const PostHeader = Post()
  const myPosts = Posts()
  return ( 
    
  <p>Hello, world!
  <NavBar />
  <br></br>
  <UserProfile />
  <br></br>
  <Contacts />
  <br></br>


  <br></br>
  <br></br>
  <Posts />
  </p>

  )


};

export default App;
