// Signup.js
import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Replace the URL with your Postman mock API endpoint for user registration
      const response = await axios.post('https://ba655539-99ca-4acf-9c3d-6041615e1efa.mock.pstmn.io/users', {
        username,
        password,
      });

      // For simplicity, assuming the API returns the newly created user
      const newUser = response.data;
      onSignup(newUser);
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
