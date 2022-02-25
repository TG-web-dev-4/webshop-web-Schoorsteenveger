import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartList = () => {
    const cartItems = useSelector((state) => state.shop.cartItems);
    console.log("cartItems", cartItems);

    const showCartItems = () => {
        if (cartItems.length === 0) return <div>Your shopping cart is empty</div>;
        return cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
        });
    };
    return (
        <>
            <div>cart items</div>
            {showCartItems()}
        </>
    );
};

export default CartList