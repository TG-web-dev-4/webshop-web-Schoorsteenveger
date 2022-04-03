import * as React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  textUnderline: {
    position: 'relative',
    paddingBottom: '40px',
    overflow: 'hidden',
    display: 'inline-block',
    textTransform: 'uppercase',
    fontWeight: 800
  },
  underline: {
    minWidth: '0%',
    transition: 'all .45s ease-in-out',
    height: '4px',
    top: '25px',
    // position: 'absolute',
    bottom: '0',
    backgroundColor: 'black',
    transform: 'rotate(0deg)',
    cursor: 'pointer',
    '&:hover': {
      minWidth: '100%',
      transform: 'rotate(0deg)'
    }
  }
})
   

function Header() {

  const classes = useStyles();

  return (

    <>
      <Grid container maxWidth="100vmax" sx={{ flexWrap: "nowrap", flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' }, alignItems: 'center', bgcolor: 'secondary.light'}}>
        <Grid container  order={2} sx={{ height: "55vh", background: 'url(./images/home.jpg)', backgroundSize: "cover", backgroundRepeat: "no-repeat", justifyContent: "center", alignItems: "flex-end"}} >
            <Typography variant="h3" fontFamily="primary" color="primary" pl= "1em" gutterBottom>Find the house of your dreams</Typography>
        </Grid>

        <Grid container item height="100%" sx={{
          alignItems: "center", bgcolor: 'secondary.light', justifyContent: 'center' }} >
          <Grid item sx={12} px={2} py={4} m="2rem">
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
            <Box classname={classes.textUnderline}  pt={2} order={1}>
              <Typography component={Link} to="/Products" style={{ textDecoration: 'none', color: 'black' }} variant='h6' fontFamily="Cinzel" sx={{ mt: 4 }}>Search for a Home</Typography>
              <Box component='span' sx={{ display: 'block' }} className={classes.underline}></Box>
            </Box>
            
          </Grid>


        </Grid>
      </Grid>
    </>

  )
}

export default Header