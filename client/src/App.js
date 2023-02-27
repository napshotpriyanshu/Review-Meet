import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import AddCandidate from './components/AddCandidate';
import Interview from './components/interview';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/addcandidate" element={<AddCandidate />} />
          <Route exact path="/interview" element={<Interview />} />
          <Route exact path="/logout" element={<Logout />} />

        </Routes>
        
      </div>
      
    </div>
  );
}

export default App;
