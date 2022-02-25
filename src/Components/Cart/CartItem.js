import {useState} from 'react'
import { connect, useSelector } from 'react-redux';
import { Card } from '@mui/material';

export const CartItem = ({ cartItem, decreaseQuantity, increaseQuantity, removeFromCart }) => {
    
    const [inputQty, setInputQty] = useState(cartItem.qty);
    return (
        <>
            <Card>
                
            </Card>
        </>
        
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)