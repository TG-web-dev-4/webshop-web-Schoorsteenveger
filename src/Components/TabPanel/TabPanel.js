import React, { useState } from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Tabs, Tab, AppBar, Typography, Box } from '@mui/material'

const TabPanel = () => {
  const [index, setIndex] = useState(0)

  const onTabClicked = (event, index) => {
    setIndex(index)

  }

  const products = useSelector((state) => state.shop.products)
  const params = useParams();
  const productID = parseInt(params.id)
  const contentDetail = products.filter(product => product.id === productID)


  const Panel = (props) => (
    <div hidden={props.value !== props.index}>
      {props.value === props.index && <Typography>{props.children}</Typography>}
    </div>
  )


  return (
    <>
      <div>
        <AppBar position='static'>
          <Tabs variant="fullWidth" value={index} onChange={onTabClicked}>
            <Tab label="Description" />
            <Tab label="Gallery" />
            <Tab label="Nearby" />
          </Tabs>
        </AppBar>

        <Panel value={index} index={0} >
          <Box padding="15px">
            <Typography variant='h5'>Full Description</Typography>
            {contentDetail[0].description}
          </Box>
         
        </Panel>
        <Panel value={index} index={1}>
          <Box padding="15px">
          <Typography variant='h5'>Gallery</Typography>
          Second tab
          </Box>
        </Panel>
        <Panel value={index} index={2}>
          <Box padding="15px">
          <Typography variant='h5'>Nearby</Typography>
            Third tab
          </Box>
        </Panel>
      </div>
    </>
  )
}

export default TabPanel