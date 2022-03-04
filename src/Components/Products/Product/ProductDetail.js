import { Box, textAlign } from '@mui/system';
import React from 'react'
import { useParams } from 'react-router'
import { makeStyles } from '@mui/styles';
import products from '../../../Data/productData';
import { AddShoppingCart, DeleteOutlineOutlined, LocalHotelRounded, BathtubRounded } from '@mui/icons-material';
import { Grid, Typography, Card, CardContent, CardMedia, CardActionArea, Avatar, CardActions } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/Shopping/shoppingActions';



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


function ProductDetail({ product, cartItem }) {

    const classes = useStyles();
    const params = useParams()

    const dispatch = useDispatch()
    // const { id } = params;

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


    return (
        <>

            <Grid container spacing={4} sx={{ display: 'flex', justifyContent: "center" }}>
                <Grid item maxWidth={(theme) => theme.breakpoints.values.sm} xs={12} md={6} lg={6} component='img' src={process.env.PUBLIC_URL + `/images/${productDetail[0].img}`} alt={productDetail[0].name} sx={{ backgroundColor: 'pink' }}>
                    {/* <Item>xs=6 md=4</Item> */}
                </Grid>
                <Grid item maxWidth={(theme) => theme.breakpoints.values.sm} sx={{ display: 'flex' }}>
                    {/* <Item> */}
                    <Card xs={12} md={12} sx={{ display: 'flex', flexDirection: 'column' }}>
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
                            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', pl: 1, pb: 1 }}>
                                <Avatar className={classes.avatar} >
                                    <LocalHotelRounded />
                                </Avatar>
                                <Typography variant='body2' color="textSecondary">{productDetail[0].Rooms} Rooms</Typography>
                                <Avatar className={classes.avatar} sx={{ ml: 2 }}>
                                    <BathtubRounded />
                                </Avatar>
                                <Typography variant='body2' color="textSecondary">{productDetail[0].Bathrooms} Bathrooms</Typography>
                            </Box>
                            <CardActions>
                                <Box sx={{ display: 'flex' }}>
                                    <AddShoppingCart onClick={""} />Add to Cart
                                </Box>
                            </CardActions>
                        </Box>
                    </Card>
                </Grid>

                <Grid item xs={12} md={12} sx={{ backgroundColor: 'green' }}>

                </Grid>
                <Grid item xs={12} md={12} sx={{ backgroundColor: 'blue' }}>
                    {/* <Item>xs=6 md=8</Item> */}
                </Grid>
            </Grid>

        </>

    )
}

export default ProductDetail