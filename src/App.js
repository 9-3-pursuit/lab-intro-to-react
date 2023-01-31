import React from "react";
import "./index.css";

import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <div className="main-container">
      <NavBar />
      <UserProfile />
    </div>
  );
}

export default App;
