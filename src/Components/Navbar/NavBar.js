import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { ClassNames } from '@emotion/react';

// import logo from '../assets/castle_logo.png';

import useStyles from '../Products/Product/styles';
// import useStyles from './styles';


export const NavBar = (props) => {

    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={`../assets/castle_logo.png`} alt="Stoker Real Estate" height="25px" className={classes.image} />
                        Stoker Real Estate
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button} />
                    <IconButton aria-label='Show cart items' color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </Toolbar>
                <div className="links">
                    <Link to="/Home">Home</Link>
                    <Link to="/Products">The Houses</Link>
                    <Link to="/About us">About us</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/Login/Register">Login/Register</Link>
                    {/* <Link to="/Searchbar">Searchbar</Link> */}
                </div>
            </AppBar>
        </>

    )
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
