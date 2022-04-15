import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
    return (
        <Drawer anchor="left" open={openDrawer} sx={{ bgcolor: 'primary' }}>
            <List>
                <ListItem divider button onClick={() => setOpenDrawer(true)}>
                    <ListItemIcon>
                        <ListItemText>Menu</ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem component={Link} to="/" style={{ textDecoration: 'none' }} divider button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem component={Link} to="/Products" style={{ textDecoration: 'none' }} divider button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>Our Properties</ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem component={Link} to="/AboutUs" style={{ textDecoration: 'none' }} divider button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>About Us</ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem component={Link} to="/Contact" style={{ textDecoration: 'none' }} divider button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>Contact</ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem component={Link} to="/Login" style={{ textDecoration: 'none' }} divider button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>Login</ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem component={Link} to="/Cart" style={{ textDecoration: 'none' }} divider button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>Shop</ListItemText>
                    </ListItemIcon>
                </ListItem>
            </List>

        </Drawer>
    )
}

export default DrawerComponent