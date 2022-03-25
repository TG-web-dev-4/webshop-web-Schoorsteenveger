import React from 'react';
import { Typography } from '@mui/material';
import { Grid} from '@mui/material';
import {  useSelector } from 'react-redux';
import ProductCard from './Product/ProductCard'; 
import { v4 } from 'uuid';
import Banner from '../Banner/Banner';



const ProductList = () => {

  // Een manier om informatie uit de redux store / state te halen
  const products = useSelector((state) => state.shop.products)
  
  return (
    
    <>
      <Banner />
      <Grid sx={{ display: 'flex', justifyContent: "center", alignItems: "center", backgroundColor:"secondary", height: "25vh" }}>
        <Typography variant="h3" fontFamily="primary" color="secondary.dark" >Choose your forever home</Typography>
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