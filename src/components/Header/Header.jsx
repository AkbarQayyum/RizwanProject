import { Box, Container,  Hidden,  IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo7.png";
import HeaderStyle from "./HeaderStyle";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import ResponsiveDrawer from "./Drawer/ResponsiveDrawer";
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
                  <NavLink
                    to={"/about-us"}
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#FFF" : "#FFF",


                    }}
                  >
                    About Us
                  </NavLink>
                </Typography>
                <Typography sx={{fontSize:"15px"}}>
                  <NavLink
                    to={"/OurPartners"}
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#FFF" : "#FFF",

                    }}
                  >
                    Our Partners
                  </NavLink>
                </Typography>
                <Typography sx={{fontSize:"15px"}}>
                  <NavLink
                    to={"/HowItWorks"}
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#FFF" : "#FFF",

                    }}
                  >
                    How It Works
                  </NavLink>
                </Typography>
                <Typography sx={{fontSize:"15px"}}>
                  <NavLink
                    to={"/CelebsLoveUs"}
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#FFF" : "#FFF",

                    }}
                  >
                    Celebs Love Us
                  </NavLink>
                </Typography>
                <Typography sx={{fontSize:"15px"}}>
                  <NavLink
                    to={"/WhySafariBet365"}
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#FFF" : "#FFF",

                    }}
                  >
                    Why SafariBet365
                  </NavLink>
                </Typography>
                <Typography sx={{fontSize:"15px"}}>
                  <NavLink
                    to={"/contact-us"}
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#FFF" : "#FFF",

                    }}
                  >
                          Contact Us
                  </NavLink>
                </Typography>
                <Typography sx={{fontSize:"15px"}}>
                  <NavLink
                    to={"/Blogs"}
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#FFF" : "#FFF",
                    }}
                  >
                              Blogs
                  </NavLink>
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
