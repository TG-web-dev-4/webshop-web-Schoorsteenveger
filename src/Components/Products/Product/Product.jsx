import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from "@mui/material";
import { AddShoppingCart } from '@mui/icons-material';
import { ClassNames } from "@emotion/react";
import useStyles from './styles';
import Products from "../Products";
import { connect } from "react-redux";
import { addToCart } from '../../../redux/Shopping/shoppingActions';


const Product = ({ product, addToCart }) => {

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
                <IconButton onClick={() => addToCart(product.id)} aria-label="Add to Cart">
                    <AddShoppingCart />                    
                </IconButton>    
                
            </CardActions>
            
        </Card>
    ) 
} 

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    }
}

export default connect(null, mapDispatchToProps)(Product)