import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button, CardActionArea, Box } from "@mui/material";
import { AddShoppingCart } from '@mui/icons-material';
import useStyles from './styles';
// import Products from "../ProductList";
import {useDispatch } from "react-redux";
import { addToCart } from '../../../redux/Shopping/shoppingActions';
import TextTruncate from "react-text-truncate";



const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const classes = useStyles();
 
  
    return (
        <Card className={classes.Card}>
            <CardActionArea component={Link} to={`/products/${product.id}`}>
                <CardMedia className={classes.Media} image={process.env.PUBLIC_URL + `/images/${product.img}`} title={product.name} color="textSecondary" />
                    <CardContent>
                        <Box className={classes.CardContent} >
                            <Typography variant ="h5" gutterBottom color="inherit">
                                {product.name}
                            </Typography>
                            <Typography gutterBottom variant ="h5" color="inherit">$
                                {product.price}
                            </Typography>
                    </Box>
                    
                    <Box className={classes.CardDescription} >
                        <Typography  >
                            <TextTruncate line={1} variant="body2" color="inherit" text={product.story}/>                       
                        </Typography>                     
                    </Box>
                        
                    </CardContent>
            </CardActionArea>
            
            <CardActions disableSpacing className={classes.CardActions}>
                <Button component={Link} color="secondary" variant="contained" to={`/products/${product.id}`}>Read more</Button>  
                <IconButton color="secondary" onClick={() => dispatch(addToCart(product.id))} aria-label="Add to Cart">
                    <AddShoppingCart />                    
                </IconButton>    
            </CardActions>
            
        </Card>
    ) 
} 

export default ProductCard