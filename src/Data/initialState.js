import products from './productData'

export const initialState = {
    shop: {
        products: products,
        cartItems: [],
        currentItem: null,
    },
};

