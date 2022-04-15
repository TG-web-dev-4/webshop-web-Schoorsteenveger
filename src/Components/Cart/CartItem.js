import { useDispatch} from 'react-redux';
import { Card, Box, Typography, Button, CardActions, CardContent, CardMedia } from '@mui/material';
import { addToCart, increaseQTY, decreaseQTY, removeFromCart } from '../../redux/Shopping/shoppingActions'
import useStyles from './styles';


export const CartItem = ({ cartItem }) => {

    const dispatch = useDispatch()
    console.log("cartItem", cartItem)
    const classes = useStyles();


    return (
        <>
            <Box marginBottom={4}>
                <Card className={classes.root}>
                    <CardMedia className={classes.media} component='img' sx={{ width: 500 }} image={process.env.PUBLIC_URL + `../images/${cartItem.img}`} alt={cartItem.name} />
                    <CardContent>
                        <Typography className={classes.CardContent} variant="h4" gutterBottom>{cartItem.name}</Typography>
                        <Typography className={classes.CardContent}>${cartItem.price}</Typography>
                    </CardContent>
                    <CardActions className={classes.CardActions}>
                        <Button onClick={() => dispatch(decreaseQTY(cartItem.id, 1))} type="button">-</Button>
                        <Typography>{cartItem.qty}</Typography>
                        <Button onClick={() => dispatch(increaseQTY(cartItem.id, 1))} type="button">+</Button>
                        <Button onClick={() => dispatch(addToCart(cartItem.id))} variant="contained" type="button">Add to Cart</Button>
                        <Button onClick={() => dispatch(removeFromCart(cartItem.id))} type="button" color="secondary">X Remove</Button>
                    </CardActions>
                </Card>
            </Box>
        </>

    )
}

export default CartItem