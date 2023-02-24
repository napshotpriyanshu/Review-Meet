import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        
      </div>
      
    </div>
  );
}

export default App;
