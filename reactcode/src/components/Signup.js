import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Grid, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = ({ onSignup }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleSignup = async () => {
    try {
      // Replace the URL with your Postman mock API endpoint for user registration
      const response = await axios.post('http://localhost:8080/registration', {
        userName,
        email,
        password,
        userType
      });
console.log(response);
      // For simplicity, assuming the API returns the newly created user
      const newUser = response.data;
      onSignup(newUser);
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px', textAlign: 'center' }}>
      <Typography variant="h4">Signup</Typography>
      <TextField
        label="Username"
        variant="outlined"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={{ margin: '20px 0' }}
      />
      <br />
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: '20px 0' }}
      />
      <br />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: '20px 0' }}
      />
      <br />
      <Select
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
        variant="outlined"
        displayEmpty
        style={{width: '100%',
        margin: '10px 0',}}
      >
        <MenuItem value="" disabled>
          Select User Type
        </MenuItem>
        <MenuItem value="Participant">Participant</MenuItem>
        <MenuItem value="Panelist">Panelist</MenuItem>
        <MenuItem value="Judge">Judge</MenuItem>
      </Select>

      <Button variant="contained" onClick={handleSignup} style={{ marginTop: '20px' }}>
        Signup
      </Button>
      

    </Container>
  );
};

export default Signup;