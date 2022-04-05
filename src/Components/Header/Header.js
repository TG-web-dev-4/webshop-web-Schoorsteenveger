import * as React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  underline: {
    width: '19%',
    transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
    height: '2px',
    top: '1px',
    bottom: '0',
    backgroundColor: 'black',
    position: 'relative',
    cursor: 'pointer',
    '&::hover:before': {
      content: "",
      position: 'absolute',
      width: '0%',
      height: '2px',
      top: '5px',
      left: '0',
      transition: 'width 0.3s ease 0s, left 0.3s ease 0s', 
      backgroundColor: 'white'
    }
  }
})


function Header() {

  const classes = useStyles();

  return (

    <>
      <Grid container maxWidth="100vmax" marginTop='-2.7rem' sx={{ flexWrap: "nowrap", flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' }, alignItems: 'center', bgcolor: 'secondary.light' }}>
        <Grid container order={2} sx={{ height: "55vh", background: 'url(./images/home.jpg)', backgroundSize: "cover", backgroundRepeat: "no-repeat", justifyContent: "center", alignItems: "flex-end" }} >
          <Typography variant="h3" fontFamily="primary" color="primary" pl="1em" gutterBottom>Find the house of your dreams</Typography>
        </Grid>

        <Grid container item height="100%" sx={{
          alignItems: "center", bgcolor: 'secondary.light', justifyContent: 'center'
        }} >
          <Grid item sx={12} px={2} py={4} my="6rem" mx="4rem">
            <Box>
              <Typography variant="h3" fontFamily="primary" textAlign={"left"} sx={{ textTransform: 'capitalize', mb: 6 }}  >
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
            <Box pt={2} order={1}>
              <Typography classname={classes.underline} component={Link} to="/Products" style={{ textDecoration: 'none', color: 'black' }} variant='h6' fontFamily="Cinzel" sx={{ mt: 4 }}>Search for a Home</Typography>
              <Box component='span' sx={{ display: 'block' }} className={classes.underline}>koekje</Box>
            </Box>

          </Grid>


        </Grid>
      </Grid>
    </>

  )
}

export default Header