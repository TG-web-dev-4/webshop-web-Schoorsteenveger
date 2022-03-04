import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Grid, Box, Paper, Container } from '@mui/material';
import { margin } from '@mui/system';


function Header() {

  return (

    <>
      <Box sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' }, justifyContent: "center", aligItems: "center", py: 15, px: 15, bgcolor: '#f7f7f5' }}>
        <Container maxWidth='lg'>
          <Grid container>
            <Grid item sx={{ bgcolor: 'white', p: '40px 30px', m: '20px auto', boxShadow: 2 }}>
              <Box>
                <Typography variant="h3" textAlign={"left"} sx={{ textTransform: 'capitalize', mb: 4 }}>
                  Buying made simple
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" textAlign={"left"}>
                  Buying but don’t know where to begin? Book in a free consultation with our property experts.
                  We can talk you through the buying process and get your documentation and finances ready.
                  Perfect for first-time buyers.
                </Typography>
              </Box>
              <Box>
                <Typography variant='h6' sx={{ mt: 8 }}>Search for a Home</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Container minWidth='lg'>
          <Grid item sx={{ width: '100%', minHeight: '35vh', background: 'url(./images/home.jpg)', backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
          // <img src={process.env.PUBLIC_URL + ‘/img/logo.png’} /></Container>

          >
          </Grid>
        </Container>
      </Box>
    </>

  )
}

export default Header