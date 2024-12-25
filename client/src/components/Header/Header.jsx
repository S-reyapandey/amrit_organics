import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  CssBaseline,
  Container,
  Stack,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { Instagram, LinkedIn, Menu, WhatsApp } from "@mui/icons-material";
import { LuPhoneCall } from "react-icons/lu";
import { RiMailSendFill } from "react-icons/ri";
import { GrMapLocation } from "react-icons/gr";

const nav_links = [
  {
    id: "home",
    path: "/",
    display: "Home",
  },
  {
    id: "about",
    path: "/about",
    display: "About Us",
  },
  {
    id: "products",
    path: "/products",
    display: "Products",
  },
  {
    id: "projects",
    path: "/projects",
    display: "Projects",
  },
  {
    id: "blog",
    path: "/blog",
    display: "Blogs",
  },
];

const drawerWidth = 400;

function Header({ navLinks = nav_links }) {
  const [isSticky, setIsSticky] = useState(false);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle} role="presentation"
      sx={{
        textAlign: "center",
        bgcolor: "#F8F7F0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "auto",
        padding: "0 2.5rem 1rem",
        margin: "0.8rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "4rem",
          marginBottom: "1.5rem",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <img
          src="../../../../src/assets/logo.png"
          alt="Logo"
          style={{ width: "150px" }}
        />
      </Box>

      <List
        sx={{
          width: "100%",
          "& .MuiListItemButton-root": {
            justifyContent: "flex-start",
            padding: "10px 0",
            fontSize: "1.5rem",
            color: "#888",
            transition: "all 0.3s ease",
            transformOrigin: "left",
            "&:hover": {
              color: "#1C3917",
              fontSize: "2.2rem",
              transform: "scale(1.1)", 
        backgroundColor: "transparent", 
            },
          },
        }}
      >
        {navLinks.map((item) => (
          <React.Fragment key={item.id}>
          <ListItem disablePadding>
          <ListItemButton
            sx={{
              textAlign: "left",
              transition: "all 0.3s ease",
            "&:hover": {
              color: "#1C3917",
              fontSize: "2.2rem",
              transform: "scale(1.1)", 
            },
            }}
            component={Link}
            to={item.path}
          >
            <ListItemText primary={item.display} />
          </ListItemButton>
        </ListItem>
        <Divider
      variant="fullWidth"
      sx={{
        width: "100%",
        borderColor: "rgba(85, 87, 81, 0.5)",
        marginBottom: "0.8rem",
        marginTop: "0.5em"
      }}
    />
          </React.Fragment>
          
        ))}
      </List>
      <Box
      padding="2rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={4}
      sx={{
        display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
        mr: 1,
      }}
    >
      <div className={styles.circle1}>
        <a
          href="https://www.linkedin.com/company/amrit-organics-jaipur/"
          target="_blank"
        >
          <IconButton sx={{ color: "#000" }} size="small">
            <LinkedIn />
          </IconButton>
        </a>
      </div>
      <div className={styles.circle1}>
        <a target="_blank">
          <IconButton sx={{ color: "#000" }} size="small">
            <Instagram />
          </IconButton>
        </a>
      </div>
    </Box>

    </Box>
  );

  const container =
    typeof window !== "undefined" && window.document
      ? window.document.body
      : undefined;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      // Get the height of the first AppBar
      const firstAppBar = document.querySelector(`.${styles.appbar1}`);
      const firstAppBarHeight = firstAppBar ? firstAppBar.offsetHeight : 75;

      // Check if scroll position is beyond the first AppBar height
      setIsSticky(window.scrollY > firstAppBarHeight);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <header className="header">
        <Stack>
          <Box className={styles.topLine}>
            <div className={styles.topLineItem}></div>
            <div className={styles.topLineItem}></div>
            <div className={styles.topLineItem}></div>
          </Box>
          {/*Header 1 */}
          <AppBar className={styles.appbar1} style={{position: "static"}}>
            <Container maxWidth="lg">
              <Toolbar disableGutters>
                {/*to wrap whole elements */}
                <Box
                  display="flex"
                  gap={8}
                  flexWrap="wrap"
                  alignItems="center"
                  flexGrow={1}
                  justifyContent="space-between"
                >
                  {/*to wrap logo */}
                  <Box
                    className={styles.logo}
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                      display: "flex",
                      flexGrow: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src="../../../../src/assets/logo.png" alt="Logo" />
                  </Box>
                  {/* to wrap icons social media handles */}
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                    gap={3}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      gap={2}
                      sx={{
                        display: { xs: "none", md: "none", lg: "flex" },
                        mr: 1,
                      }}
                    >
                      <div className={styles.circle}>
                        <a
                          href="https://www.linkedin.com/company/amrit-organics-jaipur/"
                          target="_blank"
                        >
                          <IconButton sx={{ color: "#000" }} size="small">
                            <LinkedIn />
                          </IconButton>
                        </a>
                      </div>
                      <div className={styles.circle}>
                        <a target="_blank">
                          <IconButton sx={{ color: "#000" }} size="small">
                            <Instagram />
                          </IconButton>
                        </a>
                      </div>
                      <div className={styles.circle}>
                        <a href="https://wa.me/9569501586 "target="_blank">
                          <IconButton sx={{ color: "#000" }} size="small">
                            <WhatsApp />
                          </IconButton>
                        </a>
                      </div>
                    </Box>
                    {/*To wrap contact information */}
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      alignItems="center"
                      gap={2}
                      sx={{
                        display: { xs: "none", md: "none", lg: "flex" },
                        mr: 1,
                      }}
                    >
                      {/*Phone call section */}
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        gap={1}
                      >
                        <div className={styles.iconB}>
                          <a href="tel: +91 95695 01586" target="_blank">
                            {" "}
                            <IconButton
                              sx={{ color: "#4BAF47", fontSize: "2rem" }}
                              size="large"
                            >
                              <LuPhoneCall />
                            </IconButton>
                          </a>
                        </div>

                        <Box display="flex" flexDirection="column">
                          <Typography
                            variant="body1"
                            sx={{
                              color: "#878680",
                              fontWeight: "550",
                              fontSize: "0.6rem",
                              fontFamily: "Signika"
                            }}
                          >
                            Call anytime
                          </Typography>
                          <a href="tel: +91 95695 01586" target="_blank">
                            <Typography
                              variant="h6"
                              sx={{
                                color: "#000",
                                fontWeight: "bold",
                                fontSize: "0.8rem",
                                fontFamily: "Roboto"
                              }}
                            >
                              +91 9569501586
                            </Typography>
                          </a>
                        </Box>
                      </Box>
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        sx={{
                          height: "3rem",
                          borderColor: "rgba(84, 90, 77, 0.5)",
                        }}
                      />
                      {/*Mail section */}
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        gap={1}
                      >
                        <div className={styles.iconB}>
                          <a
                            href="mailto:sales@amritorganics.in"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconButton
                              sx={{ color: "#4BAF47", fontSize: "2rem" }}
                              size="large"
                            >
                              <RiMailSendFill />
                            </IconButton>
                          </a>
                        </div>

                        <Box display="flex" flexDirection="column">
                          <Typography
                            variant="body1"
                            sx={{
                              color: "#878680",
                              fontWeight: "550",
                              fontSize: "0.6rem",
                              fontFamily: "Signika"
                            }}
                          >
                            Send Mail
                          </Typography>
                          <a
                            href="mailto:sales@amritorganics.in"
                            target="_blank"
                          >
                            <Typography
                              variant="h6"
                              sx={{
                                color: "#000",
                                fontWeight: "bold",
                                fontSize: "0.8rem",
                                fontFamily: "Roboto"
                              }}
                            >
                              sales@amritorganics.in
                            </Typography>
                          </a>
                        </Box>
                      </Box>
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        sx={{
                          height: "3rem",
                          borderColor: "rgba(84, 90, 77, 0.5)",
                        }}
                      />
                      {/*Location Section */}
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        gap={1}
                      >
                        <div className={styles.iconB}>
                          {" "}
                          <a
                            href="https://maps.app.goo.gl/xAAT4BADbVacRKMd9"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {" "}
                            <IconButton
                              sx={{ color: "#4BAF47", fontSize: "2rem" }}
                              size="large"
                            >
                              <GrMapLocation />
                            </IconButton>
                          </a>
                        </div>

                        <Box display="flex" flexDirection="column">
                          <Typography
                            variant="body1"
                            sx={{
                              color: "#878680",
                              fontWeight: "550",
                              fontSize: "0.6rem",
                              fontFamily: "Signika"
                            }}
                          >
                            Amrit Organics
                          </Typography>
                          <a
                            href="https://maps.app.goo.gl/xAAT4BADbVacRKMd9"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Typography
                              variant="h6"
                              sx={{
                                color: "#000",
                                fontWeight: "bold",
                                fontSize: "0.8rem",
                                fontFamily: "Roboto"
                              }}
                            >
                              Jaisalmer, Rajasthan
                            </Typography>
                          </a>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>

          {/*Header 2 */}
          <AppBar
            className={styles.appbar2}
            style={{
              position: "fixed",
              top: isSticky ? "0" : "auto",
              transform: isSticky ? "translateY(0)" : "translateY(80px)",
              transformStyle: "flat",
              transition: "all 0.3s ease",
              zIndex: 1000,
              transitionDuration: "0.1s",
            }}
          >
            <Toolbar>
              <Box
                display="flex"
                justifyContent="center"
                width="100%"
                alignItems="center"
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
                  }}
                >
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleDrawerToggle}
                    color="inherit" 
                  >
                    <Menu />
                  </IconButton>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  gap={3}
                  sx={{
                    display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                    
                  }}
                >
                  {navLinks.map((link) => (
                    <Typography key={link.id} variant="body1" color="white">
                      <Link
                        to={link.path}
                        style={{ color: "inherit", textDecoration: "none" }}
                        aria-label={link.display}
                        
                      >
                       <ListItem disableGutters><ListItemButton sx={{ transition:"all 0.2s ease", fontFamily: "Signika","&:hover":{
                         transform: "scale(1.1)", fontSize: "1.1rem", color: "#E1C16E"
                       }
                        
                       }}>{link.display}
                       </ListItemButton></ListItem>
                        
                      </Link>
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "block", md: "none", lg: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Stack>
      </header>
    </React.Fragment>
  );
}

Header.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      display: PropTypes.string.isRequired,
    })
  ),
};

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
