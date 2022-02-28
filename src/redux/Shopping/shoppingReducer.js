import * as actionTypes from './shoppingTypes';
import { initialState } from '../../Data/initialState';

const shopReducer = (state = initialState.shop, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const { id } = action.payload

            const cartItem = state.products.find(
                (product) => product.id === id
            );

            // console.log(cartItem)

            const isInCart = state.cartItems.find((cartItem) =>
                cartItem.id === action.payload.id
            );

            //console.log("InCart19",cartItem)

            if (isInCart) {
                const itemsAddToCart = state.cartItems.map((cartItem) =>
                    cartItem.id === action.payload.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem)

                return {
                    ...state,
                    cartItems: itemsAddToCart
                }
            }
            // console.log("cartItems", state)
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    { ...cartItem, qty: 1 }
                ]
            }



        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload),
            };

        case actionTypes.DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map((cartItem) =>
                    cartItem.id === action.payload.id ? { ...cartItem, qty: action.payload.qty - 1 }
                        : cartItem
                ),
            }


        case actionTypes.INCREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map((cartItem) =>
                    cartItem.id === action.payload.id ? { ...cartItem, qty: action.payload.qty + 1 }
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