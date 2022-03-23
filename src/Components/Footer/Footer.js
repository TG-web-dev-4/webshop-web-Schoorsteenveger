import React from 'react';
import { Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
  return (


    <Grid sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' }, bgcolor: 'secondary.main', alignContent: 'center', alignItems: 'flex-start' }} height="30rem" p={4} maxWidth="1000">
      <Grid container>
        <Grid item xs={12} sm={6} md={12} lg={12}>
          <Typography variant='h5' fontFamily="Cinzel" gutterBottom>Castle Bran</Typography>
          <Typography variant='body1'>Strada General Traian Moșoiu 24</Typography>
          <Typography variant='body1' gutterBottom>stokerreaestate@yourforeverhome</Typography>
        </Grid >
      </Grid>

      <Grid container justifyItems={'flex-start'} sx={{ flexDirection: { xs: 'row' } }} >
        <Grid item xs={12} sm={6} md={12} lg={12}>
          <Typography variant='h5' fontFamily="Cinzel" gutterBottom>Find us on...</Typography>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <li>
              <a href="/"> <FacebookIcon color='primary' /></a>
            </li>
            <li>
              <a href="/"><InstagramIcon color='primary' /></a>
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

   
  )
}

export default Footer