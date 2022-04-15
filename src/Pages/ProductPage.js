import React from 'react'
import { Grid, Container } from '@mui/material'
import { useSelector } from 'react-redux';
import ProductCard from '../Components/Products/Product/ProductCard'
import { v4 } from 'uuid';
import { makeStyles } from '@mui/styles';
import ProductList from '../Components/Products/ProductList';
import Banner from '../Components/Banner/Banner';


const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '2em',
        paddingRight: '2em'
    }
})


function ProductPage() {
   
    const classes = useStyles()

    const products = useSelector((state) => state.shop.products)
    
    return (
        <>
            <main>
               
                    <Banner />
                
                
                {/* <Grid container spacing={4} className={classes.gridContainer} marginBottom={4}>
                {products.map(product => (
                    <Grid item key={v4()} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard key={product.id} product={product} />
                    </Grid>
                ))}
            </Grid>  */}
                <Container maxWidth='1500px'>
                    <Grid>
                        <ProductList />
                    </Grid>
                </Container>           
            </main>
           
        </>
      
       
    )
}

export default ProductPage