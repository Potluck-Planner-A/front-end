import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

const Header = () => {
  const displayDesktop = () => {
    return <Toolbar>Potluck Planner</Toolbar>;
  };

  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
};

export default Header;
