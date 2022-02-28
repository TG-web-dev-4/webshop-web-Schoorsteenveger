import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Card, Typography, Button, CardActions, CardContent, CardMedia } from '@mui/material';
import { addToCart, increaseQTY, decreaseQTY, removeFromCart } from '../../redux/Shopping/shoppingActions'




export const CartItem = ({ cartItem }) => {
    const dispatch = useDispatch()

    return (
        <>

            <Card>
                <CardMedia component='img' sx={{ width: 1000 }} image={`../assets/${cartItem.img[0]}`} alt={cartItem.name} />
                <CardContent sx={{ flex: ' 1 0 auto' }}>
                    <Typography variant="h4">{cartItem.name}</Typography>
                    <Typography variant="h5">{cartItem.total}</Typography>
                </CardContent>
                <div>
                    
                    <Button onClick={() => dispatch(removeFromCart(cartItem.id))} type="button">-</Button>
                    <Typography>{cartItem.qty}</Typography>
                    <Button onClick={() => dispatch(addToCart(cartItem.id))} type="button">+</Button>

                </div>
                <Button onClick={() => dispatch(removeFromCart(cartItem.id))} variant="contained" type="button" color="secondary">Remove</Button>
            </Card>

        </>

    )
}

export default CartItem