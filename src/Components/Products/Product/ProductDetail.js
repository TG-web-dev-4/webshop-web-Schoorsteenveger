import { Box, textAlign } from '@mui/system';
import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import products from '../../../Data/productData';
import { AddShoppingCart, DeleteOutlineOutlined, LocalHotelRounded, BathtubRounded } from '@mui/icons-material';
import { Grid, Typography, IconButton, Button, CardMedia, Avatar, AvatarGroup } from "@mui/material";


const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: theme.palette.grey[50],
        color: theme.palette.main
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
}))

function ProductDetail() {

    const classes = useStyles();
    const [cartBtn, setCartBtn] = useState('Add to Cart')
    const params = useParams()
    const { id, img, description, name } = params;

    console.log('USEPARAMS', useParams())
    console.log("PARAMS", params)

    const productId = parseInt(params.id)

    // const productDetail = products.filter(product => {
    //     console.log("products", product)
    //     console.log('COMPARISON', product.id === productId)
    //     if (product.id === productId) {
    //         return true
    //     } else {
    //         return false
    //     }
    // })

    const productDetail = products.filter(product => product.id === productId) // if (product.id === productId) return true

    console.log('productDetail => filtereded array', productDetail)

    console.log("Product2", products[0])



    return (
        <>
            <Box maxWidth={'fit-content'} m={'0 auto'} xs={12} sm={6} md={6} lg={6} p={6}>
                <Grid container spacing={2} bgcolor='orange'>
                    <CardMedia className={classes.media} image={`require(../assets/${products[0].img})`}></CardMedia>
                    <CardMedia className={classes.media} image={`../assets/${products[0].img}`}></CardMedia>
                    <Grid image={`../assets/${productDetail.img}`} item xs={12} md={6}>
                        <img src={productDetail[0].img} alt={productDetail[0].name} />
                    </Grid>

                    <Grid item xs={12} md={6} bgcolor='#f7f7f5' padding={5}>
                        <Typography variant="h4" gutterBottom color="textSecondary">
                            {productDetail[0].name}
                        </Typography>
                        <Typography variant="h5" gutterBottom color="textSecondary">
                            {productDetail[0].location}
                        </Typography>
                        <Typography variant="h5" color="textSecondary">$
                            {productDetail[0].price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">{productDetail[0].description}
                        </Typography>

                        <Grid item padding={4} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: "yellow" }}>
                            <Avatar className={classes.avatar}>
                                <LocalHotelRounded />
                            </Avatar>
                            <Typography variant='body2' color="textSecondary">{productDetail[0].Rooms} Rooms</Typography>

                            <Avatar className={classes.avatar}>
                                <BathtubRounded />
                            </Avatar>
                            <Typography variant='body2' color="textSecondary">{productDetail[0].Bathrooms} Bathrooms</Typography>
                        </Grid>

                        <Grid item padding={4} sx={{ display: 'flex', justifyContent: 'center', backgroundColor: "pink", textAlign: 'left' }}>
                            <AddShoppingCart />Add to Cart
                            {/* <DeleteOutlineOutlined /> */}
                        </Grid>

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ProductDetail