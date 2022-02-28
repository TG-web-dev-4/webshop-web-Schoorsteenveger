import React from 'react';
import { Typography } from '@mui/material';
import { Grid, Box } from '@mui/material';
import { connect } from 'react-redux';
import Product from './Product/Product'; 
import products from '../../Data/productData';
import { v4 } from 'uuid';

const Products = (product) => {
  
  console.log('PRODUCTID', product.id)
  
  return (
    
    <Grid sx={{justifyContent: "center"}} container spacing={1} p={4}>
      <Typography variant="h3" color="secondary" m={5}>Choose your forever home</Typography>
      <Grid container justify="center" spacing={4}>
        {products.map(products => (
          <Grid key={v4()} item xs={12} sm={6} md={6} lg={3}>
         
            <Product key={product.id} product={products}  />             
            </Grid>
            ))}
      </Grid>
      
    </Grid>
  )
};

/* const mapStateToProps = (state) => {
  console.log("State",state)
  return {
    products: state.products,
  }
} */

export default connect(mapStateToProps)(Products)