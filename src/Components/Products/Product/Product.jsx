import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { ClassNames } from '@emotion/react';
import useStyles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/Shopping/shoppingActions';

const Product = (props) => {
  // console.log('PROPS INSIDE PRODUCT', props);
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`../assets/${props.img}`}
        title={props?.name}
        color='textSecondary'
      />
      <CardContent>
        <div className={classes.CardContent}>
          <Typography variant='h5' gutterBottom color='textSecondary'>
            {props.name}
          </Typography>
          <Typography variant='h5' color='textSecondary'>
            ${props.price}
          </Typography>
        </div>
        <Typography variant='body2' color='textSecondary'>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <Button component={Link} to={`/products/${props.id}`}>
          Read more
        </Button>
        <IconButton
          onClick={() => dispatch(addToCart(props.id))}
          aria-label='Add to Cart'>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
