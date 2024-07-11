import * as React from "react";
import {Link, useLocation } from 'react-router-dom'
import { Typography, Divider, alpha } from '@mui/material'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

export default function MainLayout() {
  return (
      <Box sx={{ display: "flex", flex: 1 }}>
        <AppBar
          component="nav"
          sx={{
            background: (theme) => theme.palette.common.white,
            color: (theme) => theme.palette.primary.main,
            boxShadow: theme => theme.shadows[1]
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
              <Typography variant="h5">HelloWorld</Typography>
              <Stack direction='row' spacing={1} divider={<Divider orientation="vertical" flexItem />}>
                <NavItem title='Todo' to='/' />
                <NavItem title='Weather' to='/weather' />
                <NavItem title='Contact' to='/contact' />
              </Stack>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ flex: 1 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
  );
}

function NavItem({title, to}) {
  const { pathname } = useLocation();
const isActive = pathname === to;
  return   <Typography component={Link}  to={to} variant="body2" sx={{
    textDecoration: 'none',
    cursor: 'pointer',
    color: theme => theme.palette.grey[700],
    ...isActive && {
      color: 'primary.main',
    },
    '&:hover': {
      color: theme => alpha(theme.palette.primary.main, 0.6),
    }
  }} >{title}</Typography>
}