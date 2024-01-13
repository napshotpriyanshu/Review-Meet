import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Login from './components/Login';
import Signup from './components/Signup';
// import AddCandidate from './components/AddCandidate';
import CandidateManage from './pages/candidateManage/CandidateManage';
import Interview from './components/interview/Interview';
import Logout from './components/Logout';
import Dashboard from './components/dashboard/Dashboard';
import UserProfile from './components/user profile/UserProfile';
import Result from './components/interview/Result';

function App() {
  return (
    <div className="App">
      <div className="container mt-3">

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/candidatemanager" element={<CandidateManage />} />
          <Route exact path="/interview" element={<Interview />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/userprofile" element={<UserProfile />} />
          <Route exact path="/result" element={<Result />} />

        </Routes>

      </div>

    </div>
  );
}

export default App;
