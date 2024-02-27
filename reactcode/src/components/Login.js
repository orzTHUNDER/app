// MergedLogin.js
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {
  Container,
  CssBaseline,
  Avatar,
  FormControlLabel,
  Checkbox,
  Link,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const MergedLogin = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'participant', // Default role is participant
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAction = async () => {
    try {
      // Replace the URL with your Postman mock API endpoint for user authentication
      const response = await axios.get(
        `https://ba655539-99ca-4acf-9c3d-6041615e1efa.mock.pstmn.io/users?username=${formData.username}&password=${formData.password}`
      );

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
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>

          <form style={{ width: '100%', marginTop: '1em' }}>
            
            {/* Select dropdown for role */}
            <InputLabel htmlFor="role">Role</InputLabel>
            <Select
              fullWidth
              id="role"
              label="Role"
              value={formData.role}
              onChange={handleChange}
              name="role"
              sx={{ marginBottom: '1em' }}
            >
              <MenuItem value="participant">Participant</MenuItem>
              <MenuItem value="panelist">Panelist</MenuItem>
              <MenuItem value="judge">Judge</MenuItem>
            </Select>

            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={formData.username}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleAction}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
              <Link component={RouterLink} to="./Signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default MergedLogin;
