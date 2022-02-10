import * as actionTypes from './shoppingTypes';

const INITIAL_STATE = {
    products: [], // id, name, location, img, price, description, rooms, bathrooms, haunted, available, img
    cart: [], // id, name, location, img, price, description, rooms, bathrooms, haunted, available, img, qty
    currentItem: null
}

const shoppingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {}
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.ADJUST_QTY:
            return {}
        case actionTypes.LOAD_CURRENT_ITEM:
            return {}
        default:
            return state;
    }
}

export default shoppingReducer;