import React from 'react';
import CartList from '../Components/Cart/CartList';
import { Grid, Box, Typography, Button, CardActions, CardContent, CardMedia } from '@mui/material';

function Cart() {
    return (
        <>
            <Grid sx={{ justifyContent: "center", display: 'flex', flexDirection: 'column', alignItems: 'center' }} container spacing={2} p={4}>
                <Box>
                    <Typography variant="h2">Checkout</Typography>
                </Box>
                <Box>
                    <CartList />
                </Box>
            </Grid>

        </>

    )
}

export default Cart