import * as React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {

  return (

    <>
      <Grid container fullWidth sx={{ flexWrap: "nowrap", flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' }, alignItems: 'center', bgcolor: 'secondary.main' }}>
        <Grid container item order={2} sx={{ height: "60vh", background: 'url(./images/home.jpg)', backgroundSize: "cover", backgroundRepeat: "no-repeat", justifyContent: "flex-end"}} >
            <Typography variant="h3" fontFamily="primary" color="primary.light">Find the house of your dreams</Typography>
        </Grid>

        <Grid container item height="50vh" sx={{
          alignItems: "center", bgcolor: 'secondary.light' }} >
          <Grid item sx={12} p={6} mx={6}>
            <Box>
              <Typography variant="h3" fontFamily="primary" textAlign={"left"}sx={{ textTransform: 'capitalize', mb: 6 }}  >
                Buying made simple
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" textAlign={"left"} pb={2} >
                Buying but don’t know where to begin? Book in a free consultation with our property experts.
                We can talk you through the buying process and get your documentation and finances ready.
                Perfect for first-time buyers.
              </Typography>
            </Box>
            <Box sx={{ borderBottom: "solid 2px black", width: '13rem' }} pt={2} order={1}>
              <Typography component={Link} to="/Products" style={{ textDecoration: 'none', color: 'black' }} variant='h6' fontFamily="Cinzel" sx={{ mt: 4 }}>Search for a Home</Typography>
            </Box>
          </Grid>


        </Grid>
      </Grid>
    </>

  )
}

export default Header