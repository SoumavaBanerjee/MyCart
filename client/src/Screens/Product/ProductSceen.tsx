import { Grid, Paper, Button, Typography, Divider } from "@material-ui/core";

import { Rating } from "@material-ui/lab";

import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

// for testing
import Products from "../../products";
import useStyles from "./styles";

interface matchId {
  id: string;
}

interface Prop extends RouteComponentProps<matchId> {}

const ProductSceen: React.FC<Prop> = ({ match }) => {
  const classes = useStyles();
  const product = Products.find((product) => product._id === match.params.id);

  return (
    <>
      <Link style={{ textDecoration: "none" }} to="/">
        <Button
          className={classes.ButtonWrapper}
          variant="outlined"
          color="secondary"
        >
          Go back
        </Button>
      </Link>
      <Grid container>
        <Grid item sm={12} md={6}>
          <div className={classes.imgWrapper}>
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
              src={product?.image}
              alt={product?.name}
            />
          </div>
        </Grid>
        <Grid item sm={12} md={3}>
          <Paper
            className={classes.descriptionWrapper}
            variant="outlined"
            elevation={3}
          >
            <Typography
              className={classes.descriptionText}
              variant="h5"
              component="h4"
              color="primary"
            >
              {product?.name}
            </Typography>
            <Divider />
            <Typography
              className={classes.descriptionText}
              variant="h6"
              component="h5"
            >
              <strong>Price:</strong>
              <br />${product?.price}
            </Typography>
            <Divider />
            <Typography
              className={classes.descriptionText}
              variant="body1"
              component="p"
            >
              <Rating precision={0.5} value={product?.rating} readOnly /> (
              {product?.numReviews})
            </Typography>
            <Divider />
            <Typography
              className={classes.descriptionText}
              variant="subtitle1"
              component="h5"
            >
              <strong>Description: </strong> <br /> {product?.description}
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={12} md={3}>
          <Paper>Hey this is paper</Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductSceen;
