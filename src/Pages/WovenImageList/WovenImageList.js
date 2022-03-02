import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem, {
    imageListItemClasses
} from "@mui/material/ImageListItem";
import { makeStyles } from '@mui/styles';
// import ImageListItem from '@mui/material/ImageListItem';
import { Box, Grid, Typography } from '@mui/material';
import products from '../../Data/productData';

const useStyles = makeStyles((theme) => ({
    Box: {
        [theme.breakpoints.down('xs')]: {
            cols: 1,
        },
    },
}))

const WovenImageList = () => {

    return (
        <Box sx={{
            display: 'grid', gridTemplateColumns: {
                mobile: "repeat(1, 1fr)",
                bigMobile: "repeat(2, 1fr)",
                tablet: "repeat(2, 1fr)",
                desktop: "repeat(4, 1fr)"
            },
            [`& .${imageListItemClasses.root}`]: {
                display: "column",
                flexDirection: "column"
            }
        }}
        >
            <ImageList sx={{ alignContent: 'center' }} variant="woven" cols={3} gap={45}>
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

export default WovenImageList
