import React from 'react';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { connect } from 'react-redux';
import Product from './Product/Product'; 
import products from '../../Data/productData';

const Products = () => {
  return (
    
    <main>
      <Typography variant="h3" color="secondary">Choose your forever home</Typography>
      <Grid container justify="center" spacing={4}>
        {products.map(product => (
          <Grid item  xs={12} sm={6} md={6} lg={3}>
            <Product key={product.id} product={product} />
          </Grid>
        ))}

      </Grid>
      
    </main>
  )
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateToProps)(Products)