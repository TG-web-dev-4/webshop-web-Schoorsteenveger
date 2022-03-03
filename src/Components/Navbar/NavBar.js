import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { initialState } from '../../Data/initialState';
import DrawerComponent from './DrawerComponent';
import { useMediaQuery } from '@mui/material';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
// import useStyles from './styles';


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

                        <Box sx={{ display: "flex", justifyContent: "space-between", alignContent: "center", alignItems: "center", width: "100%", padding: "20px 0" }} component="div">

                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                                <Typography component={Link} to="/" variant="h6" color="inherit">
                                    <img style={{ textDecoration: 'none' }} src={`../assets/images/castle_logo.PNG`} alt="Stoker Real Estate" height="150vh" />
                                </Typography>
                                <Typography variant='h4'>Stoker Real Estate</Typography>
                            </Box>

                            {/*Links*/}
                            {matches ? (<DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />) : (<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                                <Typography component={Link} to="/" style={{ textDecoration: 'none' }} variant="h6" sx={{ marginRight: "2em", cursor: "Pointer", color: "greenyellow" }}>Home</Typography>
                                <Typography variant="h6" sx={{ marginRight: "2em", cursor: "Pointer", color: "greenyellow" }}
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
                                <Typography to="/AboutUs" variant="h6" sx={{ marginRight: "2em", cursor: "Pointer", color: "greenyellow" }}>About us</Typography>
                                <Typography to="/Contact" variant="h6" sx={{ marginRight: "2em", cursor: "Pointer", color: "greenyellow" }}>Contact</Typography>

                                <Box>
                                    <Button component={Link} to="/Login" variant='contained' sx={{ marginRight: "2em", cursor: "Pointer", color: "greenyellow" }}>Login</Button>
                                </Box>
                            </Box>)}



                        </Box>



                        {matches ? (
                            <IconButton onClick={() => setOpenDrawer(true)} >
                                <MenuOutlinedIcon sx={{ fontSize: "2.2rem" }} />
                            </IconButton>

                        ) : (

                            <IconButton component={Link} to="/Cart" aria-label='Show cart items' color="inherit">
                                <Badge badgeContent={totalItemsWithReduce <= 0 ? 0 : totalItemsWithReduce} color="secondary">
                                    <ShoppingCart />
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
