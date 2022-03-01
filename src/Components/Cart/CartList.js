import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Grid, Container, Box, Typography } from '@mui/material';
import useStyles from './styles';

import { ClassNames } from "@emotion/react";
const CartList = () => {
    const classes = useStyles();
    const selectedCartItems = useSelector((state) => state.shop.cartItems);

    const totalPriceWithReduce = selectedCartItems.reduce((acc, curr) => acc + curr.qty * curr.price, 0)
    console.log('TOTAL PRICE WITH REDUCE', totalPriceWithReduce)

    const showCartItems = () => {
        if (selectedCartItems.length === 0) return <Grid sx={{ justifyContent: "center", display: 'flex', flexDirection: 'column', alignItems: 'center' }} container spacing={2} p={4}>Your shopping cart is empty</Grid>;

    }
    

    return (
        <>
            <Grid sx={{ justifyContent: "center", display: 'flex', flexDirection: 'row', alignItems: 'center' }} container spacing={2} p={4}>
                <Typography>Cart items</Typography>
                {showCartItems()}

                {selectedCartItems.map((cartItem) => {
                    console.log(cartItem, 'CARITEM IN LIST')
                    return <CartItem key={cartItem.id} cartItem={cartItem} />

                })}


            </Grid >
            <Grid sx={{ justifyContent: "center", display: 'flex', flexDirection: 'row', alignItems: 'center' }} container spacing={2} p={4}>
                <Box className={classes.totalAmount}>
                    <Typography variant="h4">${totalPriceWithReduce}</Typography>

                </Box>
                <Box className={classes.checkoutBox} sx={{color:'white'}}>
                    <Typography variant="h3">Checkout</Typography>
                </Box>
            </Grid>
        </>
      
    );
};

export default CartList