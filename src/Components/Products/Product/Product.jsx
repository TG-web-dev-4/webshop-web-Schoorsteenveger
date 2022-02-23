import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from "@mui/material";
import { AddShoppingCart } from '@mui/icons-material';
import { ClassNames } from "@emotion/react";
import useStyles from './styles';
import Products from "../Products";


const Product = ({ product }) => {

    const classes = useStyles();
    console.log('PRODUCT', product.id)

    return (
        <Card className={classes.root} key={product.id}>
            <CardMedia className={classes.media} image={`../assets/${product.img}`} title={product.name} color="textSecondary"/>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant ="h5" gutterBottom color="textSecondary">
                        {product.name}
                    </Typography>
                    <Typography variant ="h5" color="textSecondary">$
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <Button component={Link} to={`/products/${product.id}`}>Read more</Button>  
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />                 
                </IconButton>               
            </CardActions>
            
        </Card>
    ) 
} 

export default Product