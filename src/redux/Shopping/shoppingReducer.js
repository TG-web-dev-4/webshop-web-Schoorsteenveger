import * as actionTypes from './shoppingTypes';
import productsData from '../../Data/ProductData';
import { CollectionsOutlined } from '@mui/icons-material';

export const initialState = {
  products: [...productsData],
  cartItems: [],
  currentItem: null,
};

console.log('PRODUCTS INSIDE SHOP REDUCER', initialState);

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      console.log('CURRENT STATE', state);
      console.log(`INSIDE ADD_TO_CART`, action.payload);
      const { id } = action.payload;
      console.log('ID IN PAYLOAD', id);

      const newCartItem = state.products.find((item) => item.id === id);

      const itemExists = state.cartItems.find((item) => item.id === id);

      console.log(itemExists);

      if (itemExists) {
        return {
          ...state,
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, newCartItem],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        ),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, qty: +action.payload.qty }
            : cartItem
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
