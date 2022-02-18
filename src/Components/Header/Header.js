import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Grid, Box, Paper, Container } from '@mui/material';
import { margin } from '@mui/system';


// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

function Header() {

  return (

    <>
      <Box sx={{
        display: "flex", flexDirection: { xs: 'column', md: 'row' }, justifyContent: "start", alignItems: "center", padding: '50px', bgcolor: 'primary.main'
      }}>
        <Container maxWidth='md'>
          <Grid container spacing={2}>
            <Grid item sx={{ heigth: '100%', bgcolor: 'white', padding: '40px 20px' }}>
              <Typography variant="h3" textAlign={"left"} sx={{mb:4}}>
                Buying made simple
              </Typography>
              <Typography variant="p" textAlign={"left"}>
                Buying but don’t know where to begin? Book in a free consultation with our property experts.
                We can talk you through the buying process and get your documentation and finances ready.
                Perfect for first-time buyers.
              </Typography>
              <Typography variant='h6' sx={{ mt:8}}>Search for a Home</Typography>
            </Grid>

          </Grid>
        </Container>

        <Container maxWidth='lg'>
          <Grid item sx={{ width: '100%', minHeight: '50vh', background: 'url(./assets/home.jpg)', backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
          >
          </Grid>
        </Container>
      </Box>
    </>

  )
}

export default Header