import React from 'react'
import {Container, Typography, Button, Grid} from '@mui/material'

function Cart(cart) {

    const isEmpty = !cart.line_products.length;

    const EmptyCart = () => (
        <Typography>Still no house in your Cart?</Typography>
    )

    const FilledCart = () => (
        <Grid container spacing={3}>
            {cart.line_productss.map((product) => (
                <Grid item xs={12} sm={4} key={product.id}>
                    <div>{product.name}</div>
                </Grid>
            ))}
        </Grid>

    )

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3'></Typography>
            {isEmpty? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart