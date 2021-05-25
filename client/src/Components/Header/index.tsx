import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from "@material-ui/core";

import { Link } from "react-router-dom";

import AddShoppingCartSharpIcon from "@material-ui/icons/AddShoppingCartSharp";
import GroupAddRoundedIcon from "@material-ui/icons/GroupAddRounded";
import makeStyles from "./styles";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import useAction from "../../hooks/useAction";

interface HeaderProps {
  themeType: "light" | "dark";
}

const Header: React.FC<HeaderProps> = ({ themeType }) => {
  const classes = makeStyles();
  const { data } = useTypedSelector((state) => state.userLogin);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { signOutUser } = useAction();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    setAnchorEl(null);
    signOutUser();
  };

  return (
    <AppBar color="transparent" position="static">
      <Toolbar className={classes.navWrapper}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Typography component="div" variant="h4">
            MyCart
          </Typography>
        </Link>
        <div className={classes.headerIconWrapper}>
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            <Tooltip title="cart">
              <IconButton className={classes.navButton}>
                <AddShoppingCartSharpIcon />
              </IconButton>
            </Tooltip>
          </Link>

          <Tooltip title={data?.name ? "profile" : "login"}>
            {data ? (
              <>
                <Avatar
                  onClick={handleClick}
                  className={classes.avatar}
                  variant="circular"
                >
                  {data.name[0]}
                </Avatar>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <Divider />
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <MenuItem onClick={logoutUser}>Logout</MenuItem>
                  </Link>
                </Menu>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <IconButton className={classes.navButton}>
                    <GroupAddRoundedIcon />
                  </IconButton>
                </Link>
              </>
            )}
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
