import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { DeleteOutlineOutlined } from '@mui/icons-material';

import useStyles from './styles'
import { ClassNames } from '@emotion/react';

function CartItem({ item }) {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h4">{item.name}</Typography>
                    <Typography variant="h5">{item.price}</Typography>
                </CardContent>

            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small'>-</Button>
                    <Typography>{item.qty}</Typography>
                    <Button type='button' size='small'>+</Button>
                </div>
                <DeleteOutlineOutlined />
            </CardActions>
            
        </Card>
    )
}

export default CartItem