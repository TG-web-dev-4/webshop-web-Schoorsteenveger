import { Box } from '@mui/system';
import React from 'react'
import { ClassNames } from "@emotion/react";
import useStyles from './styles';
import { useParams } from 'react-router'
import products from '../Data/productData';
import { AddShoppingCart } from '@mui/icons-material';

function ProductDetail() {

    const productId = useParams();
    const productDetail = products.filter(item = item.id == productId)
    const product = productDetail[0]
    console.log(product)

    const classes = useStyles();
    return (
        <>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={product.img} alt={product.name} />
                    </Grid>

                    <Grid item item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom color="textSecondary">
                            {product.name}
                        </Typography>
                        <Typography variant="h5" color="textSecondary">$
                            {product.price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">{product.description}
                        </Typography>
                        <Buttongroup></Buttongroup>
                        <AddShoppingCart />

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ProductDetail