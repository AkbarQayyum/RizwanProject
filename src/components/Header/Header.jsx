import { Box, Container,  Hidden,  IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo7.png";
import HeaderStyle from "./HeaderStyle";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import ResponsiveDrawer from "./Drawer/ResponsiveDrawer";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

import "./Header.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeOffest, setActiveOffset] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollYOffset = window.scrollY > 100;
      setActiveOffset(scrollYOffset);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <Box
        className={activeOffest ? "navbar navbar-fixed" : "navbar"}
        sx={HeaderStyle.headerNavBox}
      >
        <Container>
          <Box sx={HeaderStyle.mainBox}>
            <Box sx={{ flexGrow: 1 }}>
              <NavLink to={"/"}>
              <Box component={'img'} src={Logo} sx={{ width:"50%", }}/>
                {/* <img src={Logo} alt=""  /> */}
              </NavLink>
            </Box>
            <Hidden mdDown>
              <Box sx={HeaderStyle.HeaderItem}>
                <Typography sx={{fontSize:"15px"}}>
                  <Link
                    activeClass="active" 
                    to="aboutus" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} 
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#FFF" : "#FFF",


                    }}
                  >
                    About Us
                  </Link>
                </Typography>
                <Typography sx={{fontSize:"15px"}}>
                  <Link
                     activeClass="active" 
                     to="partners" 
                     spy={true} 
                     smooth={true} 
                     offset={-100} 
                     duration={500} 
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#FFF" : "#FFF",

                    }}
                  >
                    Our Partners
                  </Link>
                </Typography>
                <Typography sx={{fontSize:"15px"}}>
                  <Link
                     activeClass="active" 
                     to="working" 
                     spy={true} 
                     smooth={true} 
                     offset={-100} 
                     duration={500} 
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#FFF" : "#FFF",

                    }}
                  >
                    How It Works
                  </Link>
                </Typography>
                <Typography sx={{fontSize:"15px"}}>
                  <Link
                     activeClass="active" 
                     to="celebs" 
                     spy={true} 
                     smooth={true} 
                     offset={-100} 
                     duration={500} 
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#FFF" : "#FFF",

                    }}
                  >
                    Celebs Love Us
                  </Link>
                </Typography>
                <Typography sx={{fontSize:"15px"}}>
                  <Link
                     activeClass="active" 
                     to="whysafari" 
                     spy={true} 
                     smooth={true} 
                     offset={-100} 
                     duration={500} 
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#FFF" : "#FFF",

                    }}
                  >
                    Why SafariBet365
                  </Link>
                </Typography>
                <Typography sx={{fontSize:"15px"}}>
                  <Link
                   activeClass="active" 
                   to="footer" 
                   spy={true} 
                   smooth={true} 
                   offset={-100} 
                   duration={500} 
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#FFF" : "#FFF",

                    }}
                  >
                          Contact Us
                  </Link>
                </Typography>
                <Typography sx={{fontSize:"15px"}}>
                  <Link
                    activeClass="active" 
                    to="footer" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} 
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#FFF" : "#FFF",
                    }}
                  >
                              Blogs
                  </Link>
                </Typography>
                
                 
               
              </Box>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon sx={{ color: activeOffest ? "#FFF" : "#FFF" }} />
              </IconButton>
            </Hidden>
          </Box>
        </Container>
        <Hidden mdUp>
          <ResponsiveDrawer
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        </Hidden>
      </Box>
    </>
  );
};
export default Header;
