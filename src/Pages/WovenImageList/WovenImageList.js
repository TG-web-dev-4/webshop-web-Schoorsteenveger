import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem, {
  imageListItemClasses,
} from '@mui/material/ImageListItem';
import { createTheme } from '@mui/material';
// import ImageListItem from '@mui/material/ImageListItem';
import { Box, Grid, Typography } from '@mui/material';
import productsData from '../../Data/ProductData';

export default function WovenImageList(props) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          mobile: 'repeat(1, 1fr)',
          bigMobile: 'repeat(2, 1fr)',
          tablet: 'repeat(3, 1fr)',
          desktop: 'repeat(4, 1fr)',
        },
        [`& .${imageListItemClasses.root}`]: {
          display: 'flex',
          flexDirection: 'column',
        },
      }}>
      <ImageList
        sx={{ width: '80vw', alignContent: 'center' }}
        variant='woven'
        cols={3}
        gap={45}>
        {productsData.map((product) => (
          <ImageListItem key={product.img}>
            <img
              src={`../assets/${product.img}?w=161&fit=crop&auto=format`}
              srcSet={`../assets/${product.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={product.name}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
