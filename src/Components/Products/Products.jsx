import React from 'react';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Product from './Product/Product';
import productsData from '../../Data/ProductData';
import { v4 } from 'uuid';

const Products = () => {
  // console.log('PRODUCTDATA', productsData);

  return (
    <Grid sx={{ justifyContent: 'center' }} container spacing={1} p={4}>
      <Typography variant='h3' color='secondary' m={5}>
        Choose your forever home
      </Typography>
      <Grid container justify='center' spacing={4}>
        {productsData.map((product) => {
          // console.log('PRODUCTMAP', product);

          return (
            <Grid key={v4()} item xs={12} sm={6} md={6} lg={3}>
              <Product key={product.id} {...product} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Products;
