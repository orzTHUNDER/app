// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Hackathon Portal</h1>
      <div>
        <h2>Choose your role:</h2>
        <button id='participant-signup'>
            <Link to="/signup/participant">Participant Signup</Link>
        </button>
        <button id='participant-login'>
            <Link to="/login/participant">Participant Login</Link>
        </button>
        <button id='panelist'>
            <Link to="/login/panelist">Panelist Login</Link>
        </button>
        <button id='judge'>
            <Link to="/login/judge">Judge Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
