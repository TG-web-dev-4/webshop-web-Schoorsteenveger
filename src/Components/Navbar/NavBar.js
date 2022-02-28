import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Button,
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import DrawerComponent from './DrawerComponent';
import { useMediaQuery } from '@mui/material';
// import useStyles from './styles';

export const NavBar = ({ cart }) => {
  // const [cartCount, setCartCount] = useState(0)

  // useEffect(() => {
  //     let count = 0;
  //     cart.forEach((item) => {
  //         count += item.qty;
  //     });

  //     setCartCount(count);
  // }, [cart, cartCount]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));

  const openMenu = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box mt={25}>
        <AppBar position='fixed' color='secondary'>
          <Toolbar>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: '20px 0',
              }}
              component='div'>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Typography
                  component={Link}
                  to='/'
                  variant='h6'
                  color='inherit'>
                  <img
                    style={{ textDecoration: 'none' }}
                    src={`../assets/castle_logo.png`}
                    alt='Stoker Real Estate'
                    height='150vh'
                  />
                </Typography>
                <Typography variant='h4'>Stoker Real Estate</Typography>
              </Box>

              {/*Links*/}
              {matches ? (
                <DrawerComponent
                  openDrawer={openDrawer}
                  setOpenDrawer={setOpenDrawer}
                />
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Typography
                    component={Link}
                    to='/'
                    style={{ textDecoration: 'none' }}
                    variant='h6'
                    sx={{
                      marginRight: '2em',
                      cursor: 'Pointer',
                      color: 'greenyellow',
                    }}>
                    Home
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{
                      marginRight: '2em',
                      cursor: 'Pointer',
                      color: 'greenyellow',
                    }}
                    aria-controls='basic-menu'
                    aria-haspopup='true'
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleClick}>
                    Our properties
                  </Typography>
                  <Menu
                    id='basic-menu'
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleClose}>
                    <MenuItem
                      component={Link}
                      to='/Products'
                      onClick={() => handleClose}>
                      All
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to='/Rent'
                      onClick={() => handleClose}>
                      Rent
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to='/Buy'
                      onClick={() => handleClose}>
                      Buy
                    </MenuItem>
                  </Menu>
                  <Typography
                    to='/AboutUs'
                    variant='h6'
                    sx={{
                      marginRight: '2em',
                      cursor: 'Pointer',
                      color: 'greenyellow',
                    }}>
                    About us
                  </Typography>
                  <Typography
                    to='/Contact'
                    variant='h6'
                    sx={{
                      marginRight: '2em',
                      cursor: 'Pointer',
                      color: 'greenyellow',
                    }}>
                    Contact
                  </Typography>

                  <Box>
                    <Button
                      variant='contained'
                      sx={{
                        marginRight: '2em',
                        cursor: 'Pointer',
                        color: 'greenyellow',
                      }}>
                      Login
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>

            {matches ? (
              <IconButton onClick={() => setOpenDrawer(true)}>
                <MenuOutlinedIcon sx={{ fontSize: '2.2rem' }} />
              </IconButton>
            ) : (
              <IconButton
                component={Link}
                to='/Cart'
                aria-label='Show cart items'
                color='inherit'>
                <Badge badgeContent={2} color='secondary'>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
