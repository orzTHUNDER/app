// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Replace the URL with your Postman mock API endpoint for user authentication
      const response = await axios.get(`https://ba655539-99ca-4acf-9c3d-6041615e1efa.mock.pstmn.io/users?username=${username}&password=${password}`);

      // For simplicity, assuming the API returns the user if found
      const loggedInUser = response.data[0];
      if (loggedInUser) {
        onLogin(loggedInUser);
      } else {
        console.error('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <TextField id="outlined-basic" label="Username:" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <br />
      <TextField id="outlined-basic" label="Password:" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
