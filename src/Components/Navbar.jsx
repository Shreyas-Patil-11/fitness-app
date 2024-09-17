import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Drawer, IconButton, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/images/logo-2 (1).jpg';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ 
        width: 250, 
        bgcolor: '#000000', // Black background
        color: '#FFFFFF', 
        height: '100%', // Ensures full height of the drawer
        display: 'flex', 
        flexDirection: 'column' // Allows for full vertical layout
      }} 
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem 
          button 
          component={Link} 
          to="/" 
          sx={{ 
            '&:hover': { backgroundColor: '#333333', color: '#E50914' }, // Hover effect with background color
            color: '#FFFFFF' 
          }}
        >
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem 
          button 
          component="a" 
          href="#exercises" 
          sx={{ 
            '&:hover': { backgroundColor: '#333333', color: '#E50914' }, // Hover effect with background color
            color: '#FFFFFF' 
          }}
        >
          <ListItemText primary="Exercises" />
        </ListItem>
        <ListItem 
          button 
          component={Link} 
          to="/bmi" 
          sx={{ 
            '&:hover': { backgroundColor: '#333333', color: '#E50914' }, // Hover effect with background color
            color: '#FFFFFF' 
          }}
        >
          <ListItemText primary="BMI" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Stack
      direction="row"
      alignItems="center"
      px="20px"
      gap="10px"
      sx={{ mt: { sm: '32px', xs: '20px' }}}
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '90px', height: '90px', margin: '0 20px' }} />
      </Link>

      {/* Desktop Links */}
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-start"
        sx={{ 
          display: { xs: 'none', md: 'flex' }, 
          color: '#FFFFFF', 
          '& a': { // Hover effect for desktop links
            textDecoration: 'none', 
            color: '#FFFFFF', 
            fontFamily: '"Anton", sans-serif',
            '&:hover': { 
              color: '#E50914', // Hover text color
              borderBottom: '2px solid #E50914' // Optional underline effect on hover
            }
          } 
        }}
      >
        <Link to="/">Home</Link>
        <a href="#exercises">Exercises</a>
        <Link to="/bmi">BMI</Link>
      </Stack>

      {/* Mobile Menu Icon */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ display: { xs: 'flex', md: 'none' }, color: '#FFFFFF' }}  // White icon color for contrast
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </Stack>
  );
};

export default Navbar;
