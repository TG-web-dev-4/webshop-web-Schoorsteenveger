import { Box, textAlign } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import products from '../../../Data/ProductData';
import {
  AddShoppingCart,
  DeleteOutlineOutlined,
  LocalHotelRounded,
  BathtubRounded,
} from '@mui/icons-material';
import {
  Grid,
  Typography,
  IconButton,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Avatar,
  AvatarGroup,
  CardActions,
  Container,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart, removeFrom } from '../../../redux/Shopping/shoppingActions';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.grey[50],
    color: theme.palette.main,
  },
  card: {
    height: 194,
    width: 400,
  },
}));

function ProductDetail(props) {
  console.log(props);

  const classes = useStyles();
  const [cartBtn, setCartBtn] = useState('Add to Cart');
  const params = useParams();

  const productId = parseInt(params.id);

  const productDetail = products.filter((product) => product.id === productId); // if (product.id === productId) return true

  const configAddToCardBtn = {
    type: 'button',
  };
  // console.log(productDetail[0].img)
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          component='img'
          src={`../assets/${productDetail[0].img}`}
          alt={productDetail[0].name}
          xs={6}
          md={6}
          sx={{ backgroundColor: 'pink' }}>
          {/* <Item>xs=6 md=4</Item> */}
        </Grid>
        <Grid item xs={6} md={6}>
          {/* <Item> */}
          <Card sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component='img'
              sx={{ width: 1000 }}
              image={`../assets/${productDetail[0].img}`}
              alt={productDetail[0].name}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: ' 1 0 auto' }}>
                <Typography component='div' variant='h5' gutterBottom>
                  {productDetail[0].name}
                </Typography>
                <Typography component='div' variant='subtitle1' gutterBottom>
                  {productDetail[0].location}
                </Typography>
                <Typography component='div' variant='h5'>
                  €{productDetail[0].price}
                </Typography>
                <Typography variant='body1' color='textSecondary'>
                  {productDetail[0].description}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 2 }}>
                <Avatar className={classes.avatar}>
                  <LocalHotelRounded />
                </Avatar>
                <Typography variant='body2' color='textSecondary'>
                  {productDetail[0].Rooms} Rooms
                </Typography>
                <Avatar className={classes.avatar}>
                  <BathtubRounded />
                </Avatar>
                <Typography variant='body2' color='textSecondary'>
                  {productDetail[0].Bathrooms} Bathrooms
                </Typography>
              </Box>
              <CardActions>
                <Box sx={{ display: 'flex', pl: 1, pb: 2 }}>
                  <AddShoppingCart
                    onClick={() => addToCart(props.product.id)}
                    {...configAddToCardBtn}
                  />
                  Add to Cart
                </Box>
              </CardActions>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} md={8} sx={{ backgroundColor: 'green' }}></Grid>
        <Grid item xs={6} md={4} sx={{ backgroundColor: 'blue' }}>
          {/* <Item>xs=6 md=8</Item> */}
        </Grid>
      </Grid>
      <Container></Container>
    </>
    // <>
    //     <Box sx={{ display: "flex" }}>
    //         <Grid container spacing={1} bgcolor='orange' sx={{ display: 'flex', flexDirection:'column' }}>
    //             {/* <CardMedia component='img' className={classes.media} image={`../assets/${productDetail[0].img}`} title={products[0].name} color="textSecondary" />     */}
    //             {/* <CardMedia className={classes.media} image={`../assets/${productDetail[0].img}`} alt={productDetail[0].name}></CardMedia> */}
    //             <Grid item xs={12} sm={6} md={6} lg={6}>
    //                 <img width={'100%'} height={'auto'} src={`../assets/${productDetail[0].img}`} alt={productDetail[0].name} />
    //             </Grid>

    //             <Grid item xs={12} sm={6} md={6} lg={6} bgcolor='#f7f7f5'>
    //                 <Typography variant="h4" gutterBottom color="textSecondary">
    //                     {productDetail[0].name}
    //                 </Typography>
    //                 <Typography variant="h5" gutterBottom color="textSecondary">
    //                     {productDetail[0].location}
    //                 </Typography>
    //                 <Typography variant="h5" color="textSecondary">$
    //                     {productDetail[0].price}
    //                 </Typography>
    //                 <Typography variant="body2" color="textSecondary">{productDetail[0].description}
    //                 </Typography>

    //                 <Grid item padding={3} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //                     <Avatar className={classes.avatar}>
    //                         <LocalHotelRounded />
    //                     </Avatar>
    //                     <Typography variant='body2' color="textSecondary">{productDetail[0].Rooms} Rooms</Typography>

    //                     <Avatar className={classes.avatar}>
    //                         <BathtubRounded />
    //                     </Avatar>
    //                     <Typography variant='body2' color="textSecondary">{productDetail[0].Bathrooms} Bathrooms</Typography>
    //                 </Grid>

    //                 <Grid item padding={4} sx={{ display: 'flex', justifyContent: 'center', backgroundColor: "pink", textAlign: 'left' }}>
    //                     <AddShoppingCart {...configAddToCardBtn} />Add to Cart

    //                 </Grid>

    //             </Grid>
    //         </Grid>

    //     </Box>

    // </>
  );
}

export default ProductDetail;
