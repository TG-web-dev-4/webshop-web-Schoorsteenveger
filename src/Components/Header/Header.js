import React from 'react'
import { Box } from "@mui/system"
import {Typography} from "@mui/material"

function Header() {
  return (
    <Box sx={{ minHeight: '100vh', background: 'url(./assets/home.jpg)', backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
      <Typography variant="h1" textAlign={"center"}>
      Hoe dan
      </Typography>
    </Box>
  )
}

export default Header