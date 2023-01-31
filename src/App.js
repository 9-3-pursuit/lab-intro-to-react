import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <div>
          <UserProfile classN={"profile"} />
          <Posts />
        </div>
        <Contacts />
      </main>
    </>
  );
}

export default App;
