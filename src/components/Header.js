import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Create Event",
    href: "/createevent",
  },
  {
    label: "Upcoming Events",
    href: "/upcomingevents",
  },
  {
    label: "Logout",
    href: "/logout",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#000000",
    paddingRight: "80px",
    paddingLeft: "50px",
  },
  logo: {
    fontFamily: "Droid Sans, sans-serif",
    fontWeight: 600,
    color: "#ffffff",
  },
  menuButton: {
    fontFamily: "Fira Sans, sans-serif",
    fontWeight: 700,
    size: "20px",
    marginLeft: "40px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Header = () => {
  const { header, logo, menuButton, toolbar } = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {potluckPlannerLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
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
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
};

export default Header;
