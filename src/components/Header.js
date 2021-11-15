import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
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
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
};

export default Header;
