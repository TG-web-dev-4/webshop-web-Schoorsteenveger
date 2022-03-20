import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Grid, Typography} from '@mui/material';
import useStyles from './styles';


const CartList = () => {
    const classes = useStyles();

    const selectedCartItems = useSelector((state) => state.shop.cartItems);
    const totalPriceWithReduce = selectedCartItems.reduce((acc, curr) => acc + curr.qty * curr.price, 0)
    console.log('TOTAL PRICE WITH REDUCE', totalPriceWithReduce)

    const showCartItems = () => {
        if (selectedCartItems.length === 0) return
        <Grid sx={{ justifyContent: "space-inbetween", display: 'flex', flexDirection: 'column', alignItems: 'left' }} container spacing={2} m={4}>Your shopping cart is empty</Grid>;

    }


    return (
        <>
            <Grid sx={{ display: 'flex', justifyContent: "flex-start", flexWrap: "wrap", backgroundColor: 'grey.600' }} p={8}>
                <Grid container spacing={2} mt={2} p={6} sx={{ justifyContent: "flex-start", display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'grey.200' }} >
                    <Typography variant="h4" justifyItems='left'>Cart Items</Typography>
                    {showCartItems()}

                    {selectedCartItems.map((cartItem) => {
                        console.log(cartItem, 'CARITEM IN LIST')
                        return <CartItem key={cartItem.id} cartItem={cartItem} />

                    })}
                </Grid >

                <Grid container spacing={2} p={4} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: 1, borderColor: 'grey.500'  }}>
                    <Grid item xs={12} sm={6} md={6} lg={10}>
                        <Typography variant="h4">Total</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={2} justifyContent= "flex-end" className={classes.TotalAmount}>
                        <Typography variant="h4">${totalPriceWithReduce}</Typography>
                    </Grid>
                </Grid>

            </Grid>
        </>

    );
};

export default CartList