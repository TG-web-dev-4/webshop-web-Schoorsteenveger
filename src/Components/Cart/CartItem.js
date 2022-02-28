import {useState} from 'react'
import { connect, useSelector } from 'react-redux';
import { Card, Typography, Button, CardActions, CardContent, CardMedia } from '@mui/material';


export const CartItem = ({ cartItem, decreaseQuantity, increaseQuantity, removeFromCart }) => {
    
    const [inputQty, setInputQty] = useState(cartItem.qty);
    return (
        <>
            <Card>
                <CardMedia component='img' sx={{ width: 1000 }} image={`../assets/${cartItem[0].img}`} alt={cartItem[0].name} />
                <CardContent sx={{ flex: ' 1 0 auto' }}>
                    <Typography variant="h4">{cartItem.name}</Typography>
                    <Typography variant="h5">{cartItem.total}</Typography>
                </CardContent>
                <div>
                    <Button type="button">-</Button>
                    <Typography>{cartItem.qty }</Typography>
                    <Button type="button">+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary">Remove</Button>
            </Card>

        </>
        
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)