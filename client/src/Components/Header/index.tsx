import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Tooltip,
} from "@material-ui/core";

import AddShoppingCartSharpIcon from "@material-ui/icons/AddShoppingCartSharp";
import GroupAddRoundedIcon from "@material-ui/icons/GroupAddRounded";

import makeStyles from "./styles";

interface HeaderProps {
  themeType: "light" | "dark";
}

const Header: React.FC<HeaderProps> = ({ themeType }) => {
  const classes = makeStyles();

  return (
    <AppBar color="transparent" position="static">
      <Toolbar className={classes.navWrapper}>
        <Typography component="div" variant="h4">
          MyCart
        </Typography>
        <div>
          <Tooltip title="login">
            <IconButton className={classes.navButton}>
              <GroupAddRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="cart">
            <IconButton className={classes.navButton}>
              <AddShoppingCartSharpIcon />
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
