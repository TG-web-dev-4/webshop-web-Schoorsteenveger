import React from 'react';
import { connect } from 'react-redux';
import { AppBar } from '@mui/material';
import { IconButton } from '@mui/material';

export const NavBar = (props) => {

    return (
        <div className='navBar'>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Productpage">The Houses</Link>
                <Link to="/About us">About us</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Login/Register">Login/Register</Link>
                {/* <Link to="/Searchbar">Searchbar</Link> */}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
