import * as actionTypes from './shoppingTypes';
import { initialState } from '../../Data/initialState';

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const cartItem = state.products.find(
                (product) => product.id === action.payload.id
            );
            const inCart = state.cart.find((cartItem) =>
                cartItem.id === action.payload.id ? true : false
            );

            return {
                ...state,
                cart: inCart ?
                    state.cart.map((cartItem) =>
                        cartItem.id === action.payload.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
                    )
                    : [...state.cart, { ...cartItem, qty: 1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((cartItem) =>
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