import * as React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container, createTheme, ThemeProvider, Select, MenuItem } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const defaultTheme = createTheme();

const SignUp = ({ onSignup }) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [allowExtraEmails, setAllowExtraEmails] = React.useState(false);
  const [userType, setUserType] = React.useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      // Replace the URL with your Postman mock API endpoint for user registration
      const response = await axios.post('https://ba655539-99ca-4acf-9c3d-6041615e1efa.mock.pstmn.io/users', {
        userName: `${firstName} ${lastName}`,
        email,
        password,
        userType,
      });

      // For simplicity, assuming the API returns the newly created user
      const newUser = response.data;
      onSignup(newUser);
    } catch (error) {
      console.error('Error during signup:', error);
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSignup} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <Select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  variant="outlined"
                  displayEmpty
                  fullWidth
                  style={{ margin: '10px 0' }}
                >
                  <MenuItem value="" disabled>
                    Select User Type
                  </MenuItem>
                  <MenuItem value="Participant">Participant</MenuItem>
                  <MenuItem value="Panelist">Panelist</MenuItem>
                  <MenuItem value="Judge">Judge</MenuItem>
                </Select>
              </Grid> */}
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox checked={allowExtraEmails} onChange={(e) => setAllowExtraEmails(e.target.checked)} color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
