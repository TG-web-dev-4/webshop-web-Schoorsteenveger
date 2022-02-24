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
    card: {
        height: 194,
        width: 400,
    }
}))


function ProductDetail({product}) {

    const classes = useStyles();
    const [cartBtn, setCartBtn] = useState('Add to Cart')
    const params = useParams()
    const { id } = params;

    // console.log('USEPARAMS', useParams())
    // console.log("PARAMS", params)

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
    // console.log('productDetail => filtereded array', productDetail)
    // console.log("Product2", products[0])

    const configAddToCardBtn = {
        type: 'button'
    }
    console.log(productDetail[0].img)
    return (
        <>
            <Box maxWidth={'80vw'} m={'0 auto'} xs={12} sm={6} md={6} lg={8} p={6} >
                <Grid container spacing={1} bgcolor='orange' sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    {/* <CardMedia component='img' className={classes.media} image={`../assets/${productDetail[0].img}`} title={products[0].name} color="textSecondary" />     */}
                    {/* <CardMedia className={classes.media} image={`../assets/${productDetail[0].img}`} alt={productDetail[0].name}></CardMedia> */}
                    <Grid item xs={12} xs={12} sm={6} md={6} lg={6}>
                        <img width={'100%'} height={'auto'} src={`../assets/${productDetail[0].img}`} alt={productDetail[0].name} />
                    </Grid>



                    <Grid item xs={12} sm={6} md={6} lg={6} bgcolor='#f7f7f5'>
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

                        <Grid item padding={3} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
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
                            <AddShoppingCart {...configAddToCardBtn} />Add to Cart

                        </Grid>

                        

                    </Grid>
                </Grid>

                
                
            </Box>
            {/* <Grid maxWidth={'fit-content'} m={'0 auto'} xs={12} sm={6} md={6} lg={6} p={6}>
                <WovenImageList product={product} />
            </Grid> */}
        </>
    )
}

export default ProductDetail