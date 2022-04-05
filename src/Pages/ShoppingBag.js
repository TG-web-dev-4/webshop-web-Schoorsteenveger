import React from 'react';
import CartList from '../Components/Cart/CartList';
import { Grid, Typography } from '@mui/material';
import Checkout from '../Components/Checkout/Checkout';


function ShoppingBag({ cartItem }) {


    return (
        <>
            <Grid container  maxWidth={ '90vw' } margin= '0 auto' sx={{ display: 'flex', justifyContent: "center", flexWrap: 'wrap', flexDirection: { xs: 'column', md: 'row' }}} spacing={4} bgcolor="primary.main">
                <Grid container spacing={2} justifyContent="center" alignItems='stretch'>
                    <Grid item xs={12} sm={12} md={12} lg={12} flex={1} alignContent="center" flexDirection='row'>
                        <Typography variant="h4">Your Purchase</Typography>
                    </Grid>

                    <Grid item xs={12} md={4} sx={{ border: 1, borderColor: 'grey.800', borderRadius: '10px' }} p={4}>
                        <Typography variant="h5" pb={2}>Your information</Typography>
                        <Checkout />
                    </Grid>
                    
                    <Grid item xs={8} md={6} sm={12}>
                        <CartList cartItem={cartItem} />
                    </Grid>
                    <Grid item type='button' xs={12} md={12} sm={12} flex={1} backgroundColor="black" alignItems="center" height={'fit-content'} my={6} pb={2}>
                        <Typography variant="h4"  color="white">Checkout</Typography>
                    </Grid>
                    
                </Grid>
                {/* <Grid container spacing={2} >
                   
                </Grid> */}
            </Grid>

        </>

    )
}

export default ShoppingBag