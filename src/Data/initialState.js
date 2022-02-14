const productData = require('../Data/productData')

export const initialState = {
    shop: {
        products: productData.products,
        cartItems: [],
        currentItem: null,
    },
};