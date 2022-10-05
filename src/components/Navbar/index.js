import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import "./Navbar.scss";
import MobileMenu from "./mobile-menu";
import { Avatar, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import Dropdown from "./dropdown";
import useAuth from "../../hooks/useAuth";
import { pages } from "./menu-items";

let key = 0;

const Navbar = () => {
  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;

  return (
    <AppBar className="dark-bg" position="sticky">
      <Container sx={{ py: 1 }} maxWidth="xl">
        <Toolbar disableGutters>
          <img
            className="logo"
            src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
            alt="logo"
          />

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Box className="d-flex ms-5 link-container">
              {pages
                .map((page) => (
                  <div key={key++} className="ms-4">
                    {page?.dropdown ? (
                      <div className="dropdown">
                        <span className="dropbtn cursor-pointer link py-2 px-4">
                          {page?.name}
                        </span>
                        <div className="dropdown-content">
                          {page?.dropdown?.map((data) => (
                            <NavLink key={data?.name} to={data?.link}>
                              {data?.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive && "white",
                            color: isActive && "black",
                          };
                        }}
                        className="link py-2 px-4"
                        to={page?.link}
                      >
                        {page?.name}
                      </NavLink>
                    )}
                  </div>
                ))}

              {user?.email ? (
                ""
              ) : (
                <div className="ms-4">
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        backgroundColor: isActive && "white",
                        color: isActive && "black",
                      };
                    }}
                    className="link py-2 px-4"
                    to="/sign-in"
                  >
                    Sign In
                  </NavLink>
                </div>
              )}
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>

          {user.email ? (
            <>
              <Avatar
                sx={{ ml: 4, mr: 1 }}
                className="pink-bg"
                alt={user?.displayName}
                src="/broken-image.jpg"
              />
              <Dropdown name={user?.displayName} />
            </>
          ) : (
            ""
          )}

          <Box sx={{ display: { md: "none" } }}>
            <MobileMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
