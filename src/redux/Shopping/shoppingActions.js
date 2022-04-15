import * as actionTypes from './shoppingTypes';

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const increaseQTY = (itemID, value) => {
    return {
        type: actionTypes.INCREASE_QUANTITY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const decreaseQTY = (itemID, value) => {
    return {
        type: actionTypes.DECREASE_QUANTITY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const loadCurrentItem = (id) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: id,

    }
}