import React from "react";
import "./App.css"
import "./index.css";
import "./Contacts.js"
import NavBar from "./NavBar.js";
import Contacts from "./Contacts.js";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";import ContactUserCard from "./Components/ContactUserCard.js";


const contacts = [
  {
    name: "Jo McNomo",
    title: "React Creator",
    bio: "I am an artist and graphic designer who loves to create beautiful things. I am passionate about art, design, and social justice. I enjoy creating unique and engaging social media profiles that represent who I am as an individual."
  },
  {
    name: "Jack N. Jill",
    title: "Facebook Creator",
    bio: "Hello! My name is Jack and I'm a social media enthusiast and creator. I love to share ideas and information with others, and I'm always looking for ways to improve my skills. I love creating and sharing content that is interesting, engaging, and useful."
  },
  {
    name: "Miss Piggie N. KermitdFrog",
    title: "Google Database Admin",
    bio: "My name is Piggie and I am a database administrator. I have been working with databases since the early days of Windows 2000. I am a member of the American Federation of Database Administrators (AFDA), the Association for Information Systems (AIS), and the International Federation of Database Administrators (IFDA). I have a B.A. in English from the University of Illinois at Urbana-Champaign."
  }
]

function App() {

  return (
    <>
      <header className="header">
      <NavBar className="navbar" />
      </header>
      <main>
        
        <UserProfile className="user-profile" />
        <Posts className="posts" />
        <Contacts className="contacts" contacts={contacts}  />
      </main>
    </>
  )
};

export default App;
        
       

