import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

const DrawerComponent = ({openDrawer, setOpenDrawer}) => {
    return (
        <Drawer anchor="left" open={openDrawer}>
            <List>
                <ListItem divider button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>Menu</ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>Our Properties</ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>About Us</ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>Contact</ListItemText>
                    </ListItemIcon>
                </ListItem>
            </List>

        </Drawer>
    )
}

export default DrawerComponent