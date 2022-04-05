import React from 'react'
import { Grid, Typography } from '@mui/material'

function Banner() {
    return (
        <>
            <Grid container fullWidth pt={8}>
                <Grid container maxWidth="70%" margin='0 auto' sx={{ display: "flex", height: "25em", justifyContent: "center", alignContent: "center", bgcolor: "secondary.main" }} >
                    <Grid item sx={{ display: "flex", flexDirection: "column", flexGrow:"1", justifyContent: "center", alignItems: "center"}} alignContent="center" xs={12} sm={12} md={10} >
                        <Typography variant="h3" fontFamily="primary" color="primary" textAlign="center" gutterBottom>Old Homes available in Nowhere Land</Typography>
                        <Typography variant='subtitle1' color="primary" gutterBottom>Find your next home in one of our up-and-coming developments.</Typography>
                    </Grid>               
                    <Grid sx={{ display: "flex", justifyContent:"center", alignItems: "center" }} xs={12} sm={12} md={6} lg={12}>
                        <Typography variant="h4" fontFamily="secondary" gutterBottom>Land and new homes</Typography>
                    </Grid>
                </Grid>
            </Grid>

        </>

    )
}

export default Banner