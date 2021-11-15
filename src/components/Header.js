import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#000000",
  },
}));

const Header = () => {
  const { header } = useStyles();
  const displayDesktop = () => {
    return <Toolbar>{potluckPlannerLogo}</Toolbar>;
  };

  const potluckPlannerLogo = (
    <Typography variant='h6' component='h1'>
      Potluck Planner
    </Typography>
  );

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
};

export default Header;
