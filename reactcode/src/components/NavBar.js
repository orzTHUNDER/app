import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import './NavbarStyles.css'; 

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar-background"> 
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Home
          </Typography>
          <Button color="inherit" component={Link} to="/">
           FAQ
          </Button>
          <Button color="inherit" component={Link} to="/signup">
           SignUP
          </Button>
          <Button color="inherit" component={Link} to="/login">
            login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;