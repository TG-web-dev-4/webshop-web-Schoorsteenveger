import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Grid, Typography } from '@mui/material';
import products from '../../Data/productData';

export default function WovenImageList() {
    return (
        <Box>
            <ImageList sx={{ width: '80vw', alignContent: 'center'}} variant="woven" cols={3} gap={45}>
                {products.map((product) => (
                    <ImageListItem key={product.img}>
                        <img
                            src={`../assets/${product.img}?w=161&fit=crop&auto=format`}
                            srcSet={`../assets/${product.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                            alt={product.name}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
        
    );
}

// image = {`../assets/${product.img}`}