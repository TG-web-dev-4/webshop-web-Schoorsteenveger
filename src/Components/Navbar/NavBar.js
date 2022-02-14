import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { ClassNames } from '@emotion/react';
import { Box } from '@mui/system';

// import logo from '../assets/castle_logo.png';

import useStyles from '../Products/Product/styles';
import { pink } from '@mui/material/colors';
// import useStyles from './styles';


export const NavBar = (props) => {

    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color="secondary">
                <Toolbar>
                    
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignContent: "center", alignItems: "center", width: "100%", }} component="div">
                        <Box>
                            <IconButton>
                                <MenuOutlinedIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",}}>
                            <Typography variant="h6" className={classes.title} color="inherit">
                                <img src={`../assets/castle_logo.png`} alt="Stoker Real Estate" height="150vh" className={classes.image} />                               
                            </Typography>
                            <Typography variant='h4'>Stoker Real Estate</Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                            <Typography variant="h6" sx={{ marginRight: "2em", cursor: "Pointer", color: "greenyellow" }}>Home</Typography>
                            <Typography variant="h6" sx={{ marginRight: "2em", cursor: "Pointer", color: "greenyellow" }}>Our properties</Typography>
                            <Typography variant="h6" sx={{ marginRight: "2em", cursor: "Pointer", color: "greenyellow" }}>About us</Typography>
                            <Typography variant="h6" sx={{ marginRight: "2em", cursor: "Pointer", color: "greenyellow" }}>Contact</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Button variant='contained' sx={{ marginRight: "2em", cursor: "Pointer", color: "greenyellow" }}>Login</Button>
                    </Box>
                    <Box>
                        <IconButton aria-label='Show cart items' color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </Box>
                   
                </Toolbar>
              
            </AppBar>
        </>

    )
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
