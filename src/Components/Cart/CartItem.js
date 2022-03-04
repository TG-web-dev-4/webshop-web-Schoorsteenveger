import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Box, Typography, Button, CardActions, CardContent, CardMedia } from '@mui/material';
import { addToCart, increaseQTY, decreaseQTY, removeFromCart } from '../../redux/Shopping/shoppingActions'
import useStyles from './styles';
import { ClassNames } from "@emotion/react";
import { useReducer } from 'react';




export const CartItem = ({ cartItem }) => {

    const dispatch = useDispatch()
    console.log("cartItem", cartItem)
    const classes = useStyles();

    // const numberOfItems = useSelector(state.shop)

    return (
        <>

            <Card className={classes.root}>
                <CardMedia className={classes.media} component='img' sx={{ width: 500 }} image={`../../public/images/${cartItem.img[0]}`} alt={cartItem.name} />
                {/* <img src={process.env.PUBLIC_URL + ‘/img/logo.png’} /> */}

                <CardContent sx={{ flex: ' 1 0 auto' }}>

                    <Typography className={classes.CardContent} variant="h4" gutterBottom>{cartItem.name}</Typography>
                    <Typography>${cartItem.price}</Typography>
                </CardContent>
                <CardActions className={classes.CardActions}>
                    <Button onClick={() => dispatch(decreaseQTY(cartItem.id, 1))} type="button">-</Button>
                    <Typography>{cartItem.qty}</Typography>
                    <Button onClick={() => dispatch(increaseQTY(cartItem.id, 1))} type="button">+</Button>
                    <Button onClick={() => dispatch(addToCart(cartItem.id))} variant="contained" type="button">Add to Cart</Button>
                    <Button onClick={() => dispatch(removeFromCart(cartItem.id))} type="button" color="secondary">X Remove</Button>
                </CardActions>
            </Card>


        </>

    )
}

export default CartItem