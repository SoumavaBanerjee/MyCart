import { Box, Typography } from "@material-ui/core";
import React, { FC } from "react";

import useStyles from "./styles";

const Footer: FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footerWrapper}>
      <Box>
        <Typography variant="body2" component="text">
          Copyright &copy; MyCart
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
