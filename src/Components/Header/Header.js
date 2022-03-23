import * as React from 'react';
import { Typography, Grid, Box, Container } from '@mui/material';

function Header() {

  return (

    <>
      <Box sx={{ display: "flex", flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' }, alignItems: 'center' }} margin='0 auto' height="60rem" width={'90vw'}>
        <Container >
          
            <Grid item sx={{ bgcolor: 'white', p: '4em 3em', m: '2em auto', boxShadow: 2, pl: 5}} >
              <Box>
                <Typography variant="h3" fontFamily="primary" textAlign={"left"} sx={{ textTransform: 'capitalize', mb: 4 }}>
                  Buying made simple
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" textAlign={"left"}>
                  Buying but don’t know where to begin? Book in a free consultation with our property experts.
                  We can talk you through the buying process and get your documentation and finances ready.
                  Perfect for first-time buyers.
                </Typography>
              </Box>
              <Box>
                <Typography variant='h6' fontFamily="Cinzel" sx={{ mt: 4 }}>Search for a Home</Typography>
              </Box>
            </Grid>
          
        </Container>

        <Container>
          <Grid item sx={{ width: '100%', minHeight: '35rem', background: 'url(./images/home.jpg)', backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
          // <img src={process.env.PUBLIC_URL + ‘/img/logo.png’} /></Container>

          >
          </Grid>
        </Container>
      </Box>
    </>

  )
}

export default Header