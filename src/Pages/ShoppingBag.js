import React from 'react';
import CartList from '../Components/Cart/CartList';
import { Grid, Typography, Box } from '@mui/material';


function ShoppingBag({ cartItem }) {
    
    
    return (
        <>
            <Grid container spacing={2} p={4} >
                <Grid item xs={12} md={6}>
                    <Typography variant="h3">Your information</Typography>
                    <Box sx={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', backgroundColor: 'green'}}>
                        <Typography variant="h3" color={'white'}>Checkout</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CartList cartItem={cartItem}/>
                </Grid>
            </Grid>

        </>

    )
}

export default ShoppingBag