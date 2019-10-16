import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import logoSource from "../assets/images/Logo.png";

const useStyles = makeStyles({
  grow: {
    flexGrow: 1
  },
  toolbarColor: {
    backgroundColor: "#FFFFFF"
  },
  MenuItemColor: {
    color: "#000000"
  }
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.toolbarColor}>
          <div className="Logo">
            <img src={logoSource} width="400px"></img>
          </div>
          <div className={classes.grow} />
          <MenuItem className={classes.MenuItemColor}>MAP</MenuItem>
          <MenuItem className={classes.MenuItemColor}>START VOYAGES</MenuItem>
          <MenuItem className={classes.MenuItemColor}>ALL VOYAGES</MenuItem>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
