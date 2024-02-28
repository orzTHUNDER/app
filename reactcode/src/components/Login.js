import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {
  Paper,
  Avatar,
  FormControlLabel,
  Checkbox,
  Link,
  Select,
  MenuItem,
  InputLabel,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#1C0063', // Change the primary color
    },
    secondary: {
      main: '#4caf50', // Change the secondary color
    },
    text: {
      primary: '#000000', // Change the primary text color
      secondary: '#000000', // Change the secondary text color
    },
  },
});

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

  useEffect(() => {
    document.body.classList.add('login-page');
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            display: 'flex', // Add this line
            justifyContent: 'flex-end', // Add this line
            backgroundImage: 'url(/loginbg2.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            position:'relative'
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>

            <form style={{ width: '100%', marginTop: '1em' }}>
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
                  <Link component={RouterLink} to="/Signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default MergedLogin;
