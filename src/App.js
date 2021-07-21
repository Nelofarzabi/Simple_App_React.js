import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "./Homepage"
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="comtent">
        <Home />

      </div>


    </div>
  );
}

export default App;
