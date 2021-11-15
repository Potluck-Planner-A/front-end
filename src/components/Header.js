import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

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
  },
  logo: {
    fontFamily: "Fira Sans, sans-serif",
    fontWeight: 600,
    color: "#ffffff",
    textAlign: "left",
  },
}));

const Header = () => {
  const { header, logo } = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar>
        {potluckPlannerLogo}
        {getMenuButtons()}
      </Toolbar>
    );
  };

  const potluckPlannerLogo = (
    <Typography variant='h6' component='h1'>
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
            component: Link,
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
