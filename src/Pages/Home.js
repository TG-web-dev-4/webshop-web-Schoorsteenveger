import React from 'react';
import Header from '../Components/Header/Header';
import { Image } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import WovenImageList from './WovenImageList/WovenImageList'

// const Banner = ({ purpose }) => (
//     <Box flexWrap="wrap" justifyContent="center" alignItems='center' m="10">
//         <Image src={''} width={500} height={300} alt="banner" />
//     </Box>
// )

function Home({ product }) {

    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', justifyContent: "center", alignContent: "center",alignItems: 'center' }} container p={5}>
                {/* <Banner purpose={'For Sale'} /> */}
                
                <Grid >
                    <WovenImageList product={product} />
                </Grid>
            </Box>
        </>
        
    )
}

export default Home;
