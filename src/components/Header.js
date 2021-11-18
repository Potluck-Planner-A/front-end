import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Create Event",
    href: "/newevent",
  },
  {
    label: "Upcoming Events",
    href: "/events",
  },
  {
    label: "Logout",
    href: "/logout",
  },
  {
    label: "Login",
    href: "/login",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#fff",
    paddingRight: "5rem",
    paddingLeft: "3.125rem",
    "@media (max-width: 1030px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Kaushan Script, cursive",
    fontWeight: 600,
    color: "#808000",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Antic, sans-serif",
    fontWeight: 700,
    color: "#808000",
    size: "1.25rem",
    marginLeft: "2.5rem",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "1.25rem 1.875rem",
  },
}));

const Header = () => {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1030
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {potluckPlannerLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const openDrawer = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const closeDrawer = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "#808000",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: openDrawer,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: closeDrawer,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div>{potluckPlannerLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const potluckPlannerLogo = (
    <Typography variant='h6' component='h1' className={logo}>
      Potluck Planner
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
};

export default Header;
