import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import DrawerComponent from './DrawerComponent';
import { useMediaQuery } from '@mui/material';



export const NavBar = () => {

    const selectedCartItems = useSelector((state) => state.shop.cartItems);
    console.log("selected cartitems 18", selectedCartItems)

    const totalItemsWithReduce = selectedCartItems.reduce((acc, curr) => acc + curr.qty, 0)
    console.log("TOTAL ITEMS", totalItemsWithReduce)

    const [anchorEl, setAnchorEl] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('lg'));

    const openMenu = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>

            <Box mt={25}>

                <AppBar position='fixed' color="secondary">

                    <Toolbar>

                        <Box sx={{ display: "flex", flexDirection: { xs: 'column', sm: 'row', md: 'column', lg: 'row'} ,justifyContent: "space-between", alignContent: "center", alignItems: "center", width: "100%" }} py={3} component="div">
                            
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' }}} >
                                <Typography component={Link} to="/" variant="h6" color="inherit" marginLeft={6}>
                                    
                                    <img style={{ textDecoration: 'none' }} src={process.env.PUBLIC_URL + '/images/castle_logo.png'} alt="Stoker Real Estate" height="100vh" />
                                   
                                </Typography>
                                <Box>
                                    <Typography variant='h5' fontSize={'1.2vmax'} fontFamily="Cinzel" fontWeight={700}>Stoker Real Estate</Typography>
                                </Box>
                            </Box>
                            

                            {matches ? (<DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />) : (<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                                <Typography variant="h5" sx={{ marginRight: "2em", cursor: "Pointer", color: "primary" }}
                                    aria-controls='basic-menu'
                                    aria-haspopup="true"
                                    aria-expanded={openMenu ? 'true' : undefined}
                                    onClick={handleClick}

                                >Our properties</Typography>
                                <Menu id='basic-menu'
                                    anchorEl={anchorEl}
                                    open={openMenu}
                                    onClose={handleClose}

                                >
                                    <MenuItem component={Link} to="/Products" onClick={() => handleClose}>All
                                    </MenuItem>
                                    <MenuItem component={Link} to="/Rent" onClick={() => handleClose}>Rent
                                    </MenuItem>
                                    <MenuItem component={Link} to="/Buy" onClick={() => handleClose}>Buy
                                    </MenuItem>
                                </Menu>
                                <Typography to="/AboutUs" variant="h5" sx={{ marginRight: "2em", cursor: "Pointer", color: "primary" }}>About us</Typography>
                                <Typography to="/Contact" variant="h5" sx={{ marginRight: "2em", cursor: "Pointer", color: "primary" }}>Contact</Typography>

                                <Box>
                                    <Button component={Link} to="/Login" variant='contained' color="primary" sx={{ marginRight: "2em", cursor: "Pointer", color: "primary" }}>Login</Button>
                                </Box>
                            </Box>)}


                        </Box>

                        {matches ? (
                            <IconButton onClick={() => setOpenDrawer(true)} >
                                <MenuOutlinedIcon sx={{ fontSize: "2.2rem" }} />
                            </IconButton>

                        ) : (

                            <IconButton component={Link} to="/Cart" aria-label='Show cart items' sx={{ backgroundColor: 'white', color: 'primary' }}>
                                <Badge badgeContent={totalItemsWithReduce <= 0 ? 0 : totalItemsWithReduce} color="primary">
                                    <ShoppingCart color='secondary' sx={{ fontSize: 30 }} />
                                </Badge>
                            </IconButton>

                        )}

                    </Toolbar>

                </AppBar>
            </Box>
        </>
    )
};

export default NavBar;
