import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Grid, Container, Box } from '@mui/material';

const CartList = () => {
    const cartItems = useSelector((state) => state.shop.cartItems);
    console.log("cartItems IN CARTLIST", cartItems);

    const showCartItems = () => {
        if (cartItems.length === 0) return <div>Your shopping cart is empty</div>;

    }




    return (

        <Container sx={{ justifyContent: "center" }} container spacing={1} p={4}>Cart items
            {showCartItems()}

            {cartItems.map((cartItem) => {
                console.log(cartItem, 'CARITEM IN LIST')
                return <CartItem key={cartItem.id} cartItem={cartItem} />

            })}


        </Container>
    );
};

export default CartList