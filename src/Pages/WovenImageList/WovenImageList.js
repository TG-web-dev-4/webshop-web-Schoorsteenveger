import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from "@mui/material/ImageListItem";
import {Typography, Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import products from '../../Data/productData';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';


// const useStyles = makeStyles((theme)=>({
//     // box: {
//     //     padding: theme.spacing(1),
//     //     [theme.breakpoints.down('md')]: {
//     //         cols: 2,
//     //     },
//     //     [theme.breakpoints.up('md')]: {
//     //         cols: 3,
//     //     },
//     //     [theme.breakpoints.down('xs')]: {
//     //         cols: 1,
//     //     },
//     // },
// }));



const WovenImageList = () => {
    // const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))
    
    
    return (
        <>
            <Grid container maxWidth="90vmax" margin='0 auto' display="flex" justifyContent="center">
                <Box height="100%">
                    <ImageList sx={{ alignContent: 'center' }} variant="woven"  gap={6}  cols={matches ? 3 : 1}>
                        {products.map((product) => (
                            <ImageListItem key={product.img}>
                                {/* <img src={process.env.PUBLIC_URL + ‘/img/logo.png’} /> */}
                                <img
                                    // src={`../assets/${product.img}?w=161&fit=crop&auto=format`}
                                    src={process.env.PUBLIC_URL + `/images/${product.img}?w=161&fit=crop&auto=format`}
                                    srcSet={process.env.PUBLIC_URL + `/images/${product.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                    alt={product.name}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
                
            </Grid>
           
        </>
        

    );
}

export default WovenImageList
