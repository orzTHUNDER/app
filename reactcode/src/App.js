// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/signup/:role" element={<Signup />} />
        <Route path="/login/:role" element={<Login />} /> */}
        <Route path="/Signup" element={<Signup></Signup>} />
        <Route path="/Login" element={<Login></Login>} />
      </Routes>
    </Router>
  );
};

export default App;
