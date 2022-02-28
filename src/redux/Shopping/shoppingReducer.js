import * as actionTypes from './shoppingTypes';
import products from '../../Data/productData'

export const initialState = {

    products: [...products],
    cartItems: [],
    currentItem: null,
}

console.log('PRODUCTS INSIDE SHOP REDUCER', initialState)

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            console.log('CURRENT STATE', state)
            console.log(`INSIDE ADD_TO_CART`, action.payload)
            const { id } = action.payload
            console.log("ID IN PAYLOAD", id)

            const cartItem = state.products.find(
                (product) => product.id === id

            );

            console.log('CARTITEM, ', cartItem)
            const inCart = state.products.find((cartItem) =>
                cartItem.id === action.payload.id
            );
            // console.log("state productid", product.id)

            console.log("INCART", inCart)


            const itemsAddToCart = state.cartItems.map((cartItem) =>
                cartItem.id === action.payload.id ? { ...cartItem, qty: cartItem.qty + 1 } : { ...cartItem, qty: 1 })
            console.log("Itemstocartitems", itemsAddToCart)
            return {
                ...state,
                cartItems: [...itemsAddToCart]

            }

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload),
            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cartItems: state.cartItems.map((cartItem) =>
                    cartItem.id === action.payload.id ? { ...cartItem, qty: +action.payload.qty }
                        : cartItem
                ),
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
}

export default shopReducer;