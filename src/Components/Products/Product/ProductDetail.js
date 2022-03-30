import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { LocalHotelRounded, BathtubRounded } from '@mui/icons-material';
import { Grid, Typography, Card, CardContent, Avatar, CardActions } from "@mui/material";
import { addToCart } from '../../../redux/Shopping/shoppingActions';
import TabPanel from '../../TabPanel/TabPanel';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 700,
        fontFamily: theme.fontFamily
    },
    avatar: {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.main
    },
    card: {
        height: 'auto',
        width: '100%',
        margin: '0 auto', 
        flexBasis: '50%',
        justifyItems: 'center'
    },
    btnCart: {
        backgroundColor: 'secondary.dark',
        color: 'white',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'secondary.light'
        }
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

            <Grid container maxWidth={'70vmax'} margin='0 auto' sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#efebe9'}}>
                <Grid item xs={12} sm={12} md={6} lg={6} component='img' src={process.env.PUBLIC_URL + `/images/${productDetail[0].img}`} alt={productDetail[0].name}>
                </Grid>
                <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} sm={12} md={6} lg={6} >
                    <Card className={classes.root}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left'}}>
                            <CardContent>
                                <Typography component='div' fontFamily="Cinzel" variant='h5' gutterBottom >
                                    {productDetail[0].name}
                                </Typography>
                                <Typography component='div' variant="subtitle1" gutterBottom >
                                    {productDetail[0].location}
                                </Typography>
                                <Typography component='div' fontFamily="Cinzel" variant='h5' gutterBottom>
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
                            <CardActions className={classes.btnCart} sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'secondary.dark' }} onClick={() => dispatch(addToCart(productDetail[0].id))} >
                                <Box  component='button' sx={{ backgroundColor: 'secondary.dark', color: 'white', border: 'none', hover: 'secondary.ligth', cursor: 'pointer' }} >Buy this property
                                    {/* <Avatar className={classes.avatar}>
                                        
                                        <AddShoppingCart />
                                    </Avatar> */}
                                </Box>
                            </CardActions>
                        </Box>
                    </Card>
                </Grid>

                <Grid item xs={12} md={12} sx={{ backgroundColor: '#efebe9' }}>
                   <TabPanel />
                </Grid>
                <Grid item xs={12} md={12} sx={{ backgroundColor: 'blue' }}>
                </Grid>
            </Grid>

        </>

    )
}

export default ProductDetail