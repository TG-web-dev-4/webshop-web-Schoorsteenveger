import React from 'react';
import { Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
  return (

    <Grid fullWidth sx={{ bgcolor: 'primary.dark'}} >

      <Grid maxWidth="85vw" margin='0 auto' sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' }, bgcolor: 'primary.dark', alignContent: 'center', alignItems: 'center' }} height="auto" p={4}>
        <Grid container >
          <Grid item xs={12} sm={6} md={12} lg={12}>
            <Typography variant='h5' fontFamily="Cinzel" gutterBottom>Castle Bran</Typography>
            <Typography variant='body1'>Strada General Traian Moșoiu 24</Typography>
            <Typography variant='body1'>Bran 507025, Romania</Typography>
            <Typography variant='body1' gutterBottom>stokerreaestate@yourforeverhome</Typography>
          </Grid >
        </Grid>

        <Grid container justifyItems={'flex-start'} sx={{ flexDirection: { xs: 'row' } }} >
          <Grid item xs={12} sm={6} md={12} lg={12}>
            <Typography variant='h5' fontFamily="Cinzel" gutterBottom>Find us on...</Typography>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li>
                <a href="/"> <FacebookIcon color='secondary.light' /></a>
              </li>
              <li>
                <a href="/"><InstagramIcon color='secondary.light' /></a>
              </li>
            </ul>
          </Grid >
        </Grid>

        <Grid container>
          <Grid item>
            <Typography variant='h5' fontFamily="Cinzel" gutterBottom >Pagelinks</Typography>
            <Typography variant='body1'>Terms&Conditions</Typography>
            <Typography variant='body1' gutterBottom>Complaints procedure</Typography>
            <Typography variant='body1'>Colofon</Typography>
            <Typography variant='body1'>&copy; Stoker Real Estate is not for real</Typography>
          </Grid >

        </Grid>

      </Grid>

    </Grid>



  )
}

export default Footer