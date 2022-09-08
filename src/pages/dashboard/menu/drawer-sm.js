import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { adminMenu, menu } from './menu-items';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const DrawerSmall = ({ handleMenuClick }) => {

    const { firebaseContext } = useAuth();
    const { admin } = firebaseContext;

    const [state, setState] = React.useState({
        top: false,
    });
    const location = useLocation();

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
      <Box
        className="dark-bg"
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {(admin ? adminMenu : menu).map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                className="text-white"
                onClick={() =>
                  handleMenuClick(
                    item.name === "Partner" || item.name === "Resources"
                      ? location.pathname
                      : item.link
                  )
                }
              >
                <ListItemIcon
                  className="text-white"
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    mr: 1,
                  }}
                >
                  {<item.icon />}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    return (
        <div>
            <IconButton
                onClick={toggleDrawer('top', true)}
                className='primary-text'
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor='top'
                open={state['top']}
                onClose={toggleDrawer('top', false)}
            >
                {list('top')}
            </Drawer>
        </div>
    );
};

export default DrawerSmall;