import React from 'react';
import { Typography } from '@mui/material';
import { Grid, Box } from '@mui/material';
import { connect, useSelector, useDispatch } from 'react-redux';
import ProductCard from './Product/ProductCard'; 
import { v4 } from 'uuid';

const ProductList = ({ dispatch, products }) => {
    
  return (
    
    <Grid sx={{justifyContent: "center"}} container spacing={1} p={4}>
      <Typography variant="h3" color="secondary" m={5}>Choose your forever home</Typography>
      <Grid container justify="center" spacing={4}>
        {products.map(product => (
          <Grid key={v4()} item xs={12} sm={6} md={6} lg={3}>
         
            <ProductCard key={product.id} product={product}  />             
            </Grid>
            ))}
      </Grid>
      
    </Grid>
  )
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  }
} 

export default connect(mapStateToProps)(ProductList)