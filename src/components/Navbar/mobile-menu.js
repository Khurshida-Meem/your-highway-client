import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { pages } from './menu-items';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MobileMenu = () => {

  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;

    const navigate = useNavigate();
    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const handleClick = link => {
navigate(link, { replace: true });
    }

    const list = (anchor) => (
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {pages.map((data) =>
            data?.dropdown ? (
              data?.dropdown?.map((row) => (
                <ListItem key={row?.name} disablePadding>
                  <ListItemButton
                    onClick={() => handleClick(row?.link)}
                    className="button pink-bg rounded text-white text-center mx-4 mt-2"
                  >
                    <ListItemText primary={row.name} />
                  </ListItemButton>
                </ListItem>
              ))
            ) : (
              <ListItem key={data?.name} disablePadding>
                <ListItemButton
                  onClick={() => handleClick(data?.link)}
                  className="button pink-bg rounded text-white text-center mx-4 mt-2"
                >
                  <ListItemText primary={data.name} />
                </ListItemButton>
              </ListItem>
            )
          )}
          {user?.email ? (
            ""
          ) : (
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleClick("/sign-in")}
                className="button pink-bg rounded text-white text-center mx-4 my-2"
              >
                <ListItemText primary={"Sign In"} />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Box>
    );

    return (
        <div>
            <Button sx={{ color: 'white' }} onClick={toggleDrawer('top', true)}><WidgetsIcon /></Button>
            <Drawer
                anchor='top'
                open={state['top']}
                onClose={toggleDrawer('top', false)}
            >
                {list('top')}
            </Drawer>
        </div>
    );
}

export default MobileMenu;