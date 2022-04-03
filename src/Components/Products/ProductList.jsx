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
         <Typography variant="h3" fontFamily="primary" color="secondary.dark" textAlign="center" >Choose your forever home</Typography>
       </Grid>
        
        <Grid container maxWidth='75vmax' margin="0 auto" sx={{ display: 'flex', justifyContent: "center" }} spacing={4}>
          {products.map(product => (
            <Grid item key={v4()} xs={12} sm={6} md={4} lg={3}>       
             <ProductCard key={product.id} product={product}  />             
            </Grid>
              ))}
        </Grid>       
    </>
      
   
  )
};

export default ProductList