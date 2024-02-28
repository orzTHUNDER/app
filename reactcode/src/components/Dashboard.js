import React from 'react';
import { Container, Paper } from '@mui/material';
import Navbar from './NavBar';
import backgroundImage from '../assests/download2.png'; // Corrected the import path
import Footer from './Footer';
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Container
        component="main"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '120vh',
          width: '100vw',
          overflow: 'hidden', // Ensure no overflow beyond viewport
          position: 'relative', // Use relative position
          background: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          maxWidth: 'none',
          // paddingRight:0,
          // marginRight:0,
          // paddingLeft:0,
          // marginLeft:0
        }}
      >
        {/* <Paper
          elevation={2}
          style={{
            width: '100%',
            height: '100%',
            
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
           // backgroundColor: 'black',
          }}
        > */}
          {/* Content inside the Paper component goes here */}
        {/* </Paper> */}
      </Container>
    
    <Footer></Footer>
    </div>
  );
};

export default Dashboard;
