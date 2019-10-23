import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  grow: {
    flexGrow: 1
  },
  toolbarColor: {
    backgroundColor: "#0b3c61"
  },
  MenuItemColor: {
    color: "#FFFFFF"
  }
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.toolbarColor}>
          <div className={classes.grow} />
          <MenuItem>
            <Link className={classes.MenuItemColor} to="/voyages">
              MAP
            </Link>
          </MenuItem>
          <Route>
            <MenuItem>
              <Link className={classes.MenuItemColor} to="/voyages/new">
                CREATE VOYAGE
              </Link>
            </MenuItem>
          </Route>
          <MenuItem>
            <Link className={classes.MenuItemColor} to="/voyages-summary">
              ALL VOYAGES
            </Link>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
