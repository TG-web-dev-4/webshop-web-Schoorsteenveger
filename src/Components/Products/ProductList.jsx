import React from 'react';
import { Typography } from '@mui/material';
import { Grid} from '@mui/material';
import {  useSelector } from 'react-redux';
import ProductCard from './Product/ProductCard'; 
import { v4 } from 'uuid';



const ProductList = () => {

  // Een manier om informatie uit de redux store / state te halen
  const products = useSelector((state) => state.shop.products)
  
  return (
    
    <>
      <Grid sx={{ display: 'flex', justifyContent: "center", backgroundColor:"secondary" }}>
        <Typography variant="h3" color="secondary" >Choose your forever home</Typography>
      </Grid>
        
      <Grid sx={{ display: 'flex', justifyContent: "center" }} container spacing={4}>
        {products.map(product => (
          <Grid key={v4()} item xs={12} sm={6} md={6} lg={3}>       
            <ProductCard key={product.id} product={product}  />             
          </Grid>
            ))}
      </Grid>      
    
    </>
      
   
  )
};

export default ProductList