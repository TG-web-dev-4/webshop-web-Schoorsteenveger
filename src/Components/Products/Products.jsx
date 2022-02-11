import React from 'react';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
// import { products } from '../../Data/productData';
import { connect } from 'react-redux';


import Product from './Product/Product'; // is de single item card

const Products = (products) => {
  return (
    <main>
      <Grid container justify=" center" spacing={4}>
        {products.map((product) => (
          <Grid item  xs={12} sm={6} md={4} lg={3}>
            <Product key={product.id} productData={product} />
          </Grid>
        ))}

      </Grid>
      // <Typography variant="h3" color="secondary">Maak header 2divs</Typography>
    </main>
  )
};

const mapStateToProps = state => {
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateToProps)(Products)