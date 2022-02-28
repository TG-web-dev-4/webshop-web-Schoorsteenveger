

const products = require('../Data/productData')

export const initialState = {
    shop: {
        products: products.products,
        cartItems: [],
        currentItem: null,
    },
};

