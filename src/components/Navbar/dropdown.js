import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../styled.components';
import useAuth from '../../hooks/useAuth';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

const Dropdown = ({ name }) => {

    const { firebaseContext } = useAuth();
    const {admin, logOut } = firebaseContext;


    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLinkClick = link => {
        navigate('..' + link, { replace: true });
        setAnchorEl(null);

    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleLogout = () => {
        logOut();
        handleClose();
    }

    return (
      <div>
        <PrimaryButton
          bg="transparent"
          color="white"
          id="dropdown-btn"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          disableElevation
          onClick={handleClick}
        >
          <div className="d-flex align-items-center">
            {name}
            <KeyboardArrowDownIcon />
          </div>
        </PrimaryButton>
        <StyledMenu
          id="dropdown-btn"
          MenuListProps={{
            "aria-labelledby": "dropdown-btn",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => handleLinkClick(admin ? "/dashboard/" : "/dashboard/user")}
            disableRipple
          >
            <PersonIcon className="secondary-text" />
            My Profile
          </MenuItem>
          <MenuItem onClick={handleLogout} disableRipple>
            <LoginIcon className="secondary-text" />
            Logout
          </MenuItem>
        </StyledMenu>
      </div>
    );
};

export default Dropdown;