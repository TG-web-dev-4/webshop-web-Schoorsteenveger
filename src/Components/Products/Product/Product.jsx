import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from "@mui/material";
import { AddShoppingCart } from '@mui/icons-material';
import { ClassNames } from "@emotion/react";
import useStyles from './styles';
import Products from "../Products";


const Product = ({ product }) => {

    const classes = useStyles();

    return (
        <Card className={classes.root} key={product.id}>
            <CardMedia className={classes.media} image={`../assets/${product.img}`} title={product.name} color="textSecondary"/>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant ="h5" gutterBottom color="textSecondary">
                        {product.name}
                    </Typography>
                    <Typography variant ="h5" color="textSecondary">$
                        { product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                    <Button to={`/products/${product.id}`} size="medium">Learn More</Button>
                </IconButton>               
            </CardActions>
            
        </Card>
    )
}

export default Product