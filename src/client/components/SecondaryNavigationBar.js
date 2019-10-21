import React from "react";
import logout from "./LogoutButton";
import { getTokenData } from "../utilities/getTokenData";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

function SecondaryNavigationBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  let userName = getTokenData("user_name");
  let userRole = getTokenData("role");

  if (
    userRole.toLowerCase() === "admin" ||
    userRole.toLowerCase() === "superuser"
  ) {
    return (
      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>{userName}</MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/admin">Administration</Link>
          </MenuItem>
          <MenuItem>
            <LogoutButton />
          </MenuItem>
        </Menu>
      </div>
    );
  } else {
    return (
      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>{userName}</MenuItem>
          <MenuItem>
            <LogoutButton />
          </MenuItem>
        </Menu>
      </div>
    );
  }
}
export default SecondaryNavigationBar;
