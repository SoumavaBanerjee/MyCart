import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
interface props {
  image?: string;
}

const FormContainer: React.FC<props> = ({ children, image }) => {
  const classes = useStyles();
  return (
    <Grid justify="center" container>
      {image ? (
        <>
          <Grid item xs={12} md={6}>
            {children}
          </Grid>
          <Grid item className={classes.imgWrapper} xs={12} md={6}>
            <img className={classes.formImage} src={image} alt="secured" />
          </Grid>
        </>
      ) : (
        <Grid item xs={12} md={6}>
          {children}
        </Grid>
      )}
    </Grid>
  );
};

export default FormContainer;
