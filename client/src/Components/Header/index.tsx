import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";
import { Box } from "@material-ui/core";

interface HeaderProps {
  themetype: "light" | "dark";
}

const Header: React.FC<HeaderProps> = ({ themetype }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            MyCart
          </Typography>
          <Box>
            <Button color="primary" variant="outlined">
              Login
            </Button>
            <Button color="primary" variant="outlined">
              Sign in
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
