import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Badge, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { adminMenu, menu } from "./menu-items";
import useAuth from "../../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchBlogs from "../../../redux/blogs/thunk/fetch-blogs";

const drawerWidth = 210;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerLarge = ({ open, handleMenuClick }) => {
  const { firebaseContext } = useAuth();
  const { admin } = firebaseContext;

  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/", { replace: true });
  };
  const location = useLocation();

  const blogsData = useSelector(state => state.blogs.blogs);
  const dispatch = useDispatch();
  const length = blogsData.filter((data) => data.status === "Pending").length;

useEffect(() => {
  dispatch(fetchBlogs);
},[dispatch])

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader className="menu-header">
        <h3 onClick={handleLogoClick} className="text-white cursor-pointer">
          Your Highway
        </h3>
      </DrawerHeader>
      <Box className="menu-items">
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            {(admin ? adminMenu : menu).map((item) => (
              <div key={item.name}>
                <ListItemButton
                  className={
                    location.pathname === item.link
                      ? "button-active dashboard-button text-white"
                      : "dashboard-button text-white"
                  }
                  onClick={() =>
                    handleMenuClick(
                      item.name === "Partner" || item.name === "Resources"
                        ? location.pathname
                        : item.link
                    )
                  }
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    py: 1,
                    mt: 1,
                    mx: "5px",
                    borderRadius: "7px",
                  }}
                >
                  <ListItemIcon
                    className="text-white badge"
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.name === "Blog" && admin ? (
                      <Badge badgeContent={length} color="secondary">
                        {<item.icon />}
                      </Badge>
                    ) : (
                      <item.icon />
                    )}
                  </ListItemIcon>

                  <ListItemText
                    primary={item.name}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </div>
            ))}
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerLarge;
