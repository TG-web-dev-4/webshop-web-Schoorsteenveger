import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@mui/material";
import { AddShoppingCart } from '@mui/icons-material';
import { ClassNames } from "@emotion/react";

import useStyles from './styles';
import Products from "../Products";

const Product = (product, products, productData) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={Products.img} title={products.name} />
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant ="h5" gutterBottom>
                        {products.name}
                    </Typography>
                    <Typography variant ="h5">
                        {products.price}
                    </Typography>
                </div>
                <Typography variant="h2" color="textSecondary">{products.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
            
        </Card>
    )
}

export default Product