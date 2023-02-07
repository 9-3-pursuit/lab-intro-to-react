import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import Post from "./Components/Post";
import Posts from "./Components/Posts";
import ContactUserCard from "./Components/ContactUserCard";

const App = () => {
  return (
    <>
      <NavBar />
      <UserProfile />
      <Contacts />
      <Post />
      <Posts />
      <ContactUserCard />
    </>
  );
};

export default App;
