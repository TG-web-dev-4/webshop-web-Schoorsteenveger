import React from 'react'
import { TextField, Grid } from '@mui/material'



function Checkout() {
    
    return (
        <form >
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <TextField label ="First Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Last Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Adress line 1" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Adress line 2" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Postal/Zipcode" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="City" variant="outlined" fullWidth />
                </Grid>
                <Grid item>
                    <TextField label="Country" variant="outlined" fullWidth />
                </Grid>
            </Grid>
        </form>
    )
}

export default Checkout