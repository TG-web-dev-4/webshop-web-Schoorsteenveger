import React from 'react';
import { Typography } from '@mui/material';
import { Grid} from '@mui/material';
import {  useSelector } from 'react-redux';
import ProductCard from './Product/ProductCard'; 
import { v4 } from 'uuid';
import Banner from '../Banner/Banner';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '2em',
        paddingRight: '2em'
    }
})


const ProductList = () => {

    const products = useSelector((state) => state.shop.products)
    const classes = useStyles()
  
  return (
    
    <>
      {/* <Banner /> */}
        <Grid sx={{ display: 'flex', justifyContent: "center", alignItems: "center", backgroundColor:"secondary", height: "25vh" }}>
         <Typography variant="h3" fontFamily="primary" color="secondary.dark" textAlign="center" >Choose your forever home</Typography>
       </Grid>
        
         <Grid container spacing={4} className={classes.gridContainer} marginBottom={4}>
                {products.map(product => (
                    <Grid item key={v4()} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard key={product.id} product={product} />
                    </Grid>
                ))}
          </Grid> 
    </>
      
   
  )
};

export default ProductList