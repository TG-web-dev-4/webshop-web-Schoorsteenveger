import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
//import products from '../../../Data/productData';
import { AddShoppingCart, LocalHotelRounded, BathtubRounded } from '@mui/icons-material';
import { Grid, Typography, Card, CardContent, CardMedia, Avatar, CardActions } from "@mui/material";
import { addToCart } from '../../../redux/Shopping/shoppingActions';

const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.main
    },
    card: {
        height: 'auto',
        width: '100%'
    }
}))


function ProductDetail() {

    const products = useSelector((state) => state.shop.products)
    console.log('PRODUCTS INSIDE PRODUCT DETAILS', products)

    const classes = useStyles();
    const params = useParams()
    const dispatch = useDispatch()
    const productId = parseInt(params.id)

    const productDetail = products.filter(product => product.id === productId) // if (product.id === productId) return true
    // console.log('productDetail => filtereded array', productDetail)
    // console.log("Product2", products[0])

    return (
        <>

            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                <Grid item xs={12} md={6} component='img' src={process.env.PUBLIC_URL + `/images/${productDetail[0].img}`} alt={productDetail[0].name} sx={{ backgroundColor: 'pink' }}>
                </Grid>
                <Grid item sx={{ display: 'flex' }} xs={12} md={6} lg={6} >
                    <Card className={classes.card}>
                        <CardMedia component='img' image={process.env.PUBLIC_URL + `/images/${productDetail[0].img}`} alt={productDetail[0].name} />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: ' 1 0 auto' }}>
                                <Typography component='div' variant='h5' gutterBottom >
                                    {productDetail[0].name}
                                </Typography>
                                <Typography component='div' variant="subtitle1" gutterBottom >
                                    {productDetail[0].location}
                                </Typography>
                                <Typography component='div' variant='h5' gutterBottom>
                                    €{productDetail[0].price}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    {productDetail[0].description}
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <Avatar className={classes.avatar} >
                                    <LocalHotelRounded />
                                </Avatar>
                                <Typography variant='body2' color="textSecondary" sx={{ ml: 2, pr: 1 }}>{productDetail[0].Rooms} Rooms</Typography>
                                <Avatar className={classes.avatar} >
                                    <BathtubRounded />
                                </Avatar>
                                <Typography variant='body2' color="textSecondary" sx={{ ml: 2, pr: 1 }}>{productDetail[0].Bathrooms} Bathrooms</Typography>
                            </Box>
                            <CardActions>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Avatar className={classes.avatar}>
                                        <AddShoppingCart onClick={() => dispatch(addToCart(productDetail[0].id))} />
                                    </Avatar>
                                </Box>
                            </CardActions>
                        </Box>
                    </Card>
                </Grid>

                <Grid item xs={12} md={12} sx={{ backgroundColor: 'yellow' }}>

                </Grid>
                <Grid item xs={12} md={12} sx={{ backgroundColor: 'blue' }}>
                </Grid>
            </Grid>

        </>

    )
}

export default ProductDetail