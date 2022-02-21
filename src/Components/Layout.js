
import { lightGreen } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';


import React from 'react'

const useStyles = makeStyles({
    page: {
        background: lightGreen,
        width: '100%',
        padding: '50px'
    }
})

function Layout({ children }) {
    const classes = useStyles();

    return (
        <div className='classes.page'>
            <div>{children}</div>
        </div>

    )
}

export default Layout