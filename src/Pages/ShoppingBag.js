import React from 'react';
import CartList from '../Components/Cart/CartList';
import { Grid, Typography } from '@mui/material';
import Checkout from '../Components/Checkout/Checkout';


function ShoppingBag({ cartItem }) {


    return (
        <>
            <Grid sx={{ display: 'flex', justifyContent: "space-around", flexDirection: { xs: 'column', md: 'row' }}} p={5}>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={6} md={12} lg={12} py={2} alignItems="center">
                        <Typography variant="h4">Your Purchase</Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ border: 1, borderColor: 'grey.800', borderRadius: '10px' }} p={4}>
                        <Typography variant="h5" pb={2}>Your information</Typography>
                        <Checkout />
                    </Grid>

                    <Grid item xs={12} backgroundColor="black" alignItems="center" height={'fit-content'} mt={5}>
                        <Typography variant="h4" color="white">Checkout</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <CartList cartItem={cartItem} />
                    </Grid>
                </Grid>
            </Grid>

        </>

    )
}

export default ShoppingBag