import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import ContactPageTwoToneIcon from "@mui/icons-material/ContactPageTwoTone";
import { Link } from "react-router-dom";

const navbarLinks = [
  {
    title: "home",
    path: "/",
    icon: <HomeTwoToneIcon />,
  },
  {
    title: "sobre mi",
    path: "sobreMi",
    icon: <InfoTwoToneIcon />,
  },
  {
    title: "proyectos",
    path: "proyectos",
    icon: <WorkTwoToneIcon />,
  },
  {
    title: "contacto",
    path: "contacto",
    icon: <ContactPageTwoToneIcon />,
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //   const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //   const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  //   };

  return (
    <AppBar position="static" >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0, justifyContent: "space-around" }}>
            <img
              src="/src/assets/img/Ale Fernández-logo.png"
              className="logoHeader"
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },      
              }}
            >
              {navbarLinks.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      to={`${page.path}`}
                      key={page.title}
                      className=""
                    >
                      {page.title}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {navbarLinks.map((page) => (
              <>
                <Typography textAlign="center" marginRight="20px">
                  <Link 
                  to={`${page.path}`} 
                  key={page.title} 
                  className="hvr-overline-from-center">
                    {page.title}
                  </Link>
                </Typography>
              </>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
