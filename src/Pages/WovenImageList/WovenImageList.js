import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from "@mui/material/ImageListItem";
import { imageListItemClasses, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box} from '@mui/material';
import products from '../../Data/productData';


const useStyles = makeStyles((theme) => ({
    Box: {
        [theme.breakpoints.down('md')]: {
            cols: 1,
        },
    },
}))



const WovenImageList = () => {

    return (
        <>
            <div display="flex">
                <Box maxWidth={'70vw'} height="100%" p={4}>
                    <ImageList sx={{ alignContent: 'center' }} variant="woven" cols={3} gap={16} >
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
                <Box maxWidth={'50vw'}>
                    <Typography>Hello</Typography>
                    
                </Box>
            </div>
           
        </>
        

    );
}

export default WovenImageList
