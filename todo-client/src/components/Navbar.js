import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          HelloWorld WebApp
        </Typography>
        <Button color="inherit" component={Link} to="/todos">
          Todo List
        </Button>
        <Button color="inherit" component={Link} to="/weather">
          Weather Forecast
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;