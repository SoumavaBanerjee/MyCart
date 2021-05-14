import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Button,
  Typography,
  Divider,
  LinearProgress,
  FormControl,
  Select,
  InputLabel,
} from "@material-ui/core";

import { Alert, Rating } from "@material-ui/lab";
import { Link, RouteComponentProps } from "react-router-dom";

import useAction from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import useStyles from "./styles";

interface matchId {
  id: string;
}

interface Prop extends RouteComponentProps<matchId> {}

const ProductSceen: React.FC<Prop> = ({ match, history }): JSX.Element => {
  const classes = useStyles();

  const [quantity, setQuantity] = useState(1);

  console.log(quantity);
  // const product = Products.find((product) => product._id === match.params.id);

  const { fetchProductDetails } = useAction();
  const { data, error, loading } = useTypedSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    fetchProductDetails(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);

  const cartHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    history.push(`/cart/${match.params.id}?quantity=${quantity}`);
  };

  return (
    <>
      {loading ? (
        <LinearProgress
          style={{ marginTop: "4px", marginBottom: "4px" }}
          color="primary"
        />
      ) : error ? (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      ) : !data ? (
        <Alert variant="outlined" severity="error">
          Something went wrong! Please try again later
        </Alert>
      ) : (
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
                  src={data.image}
                  alt={data.name}
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
                  {data.name}
                </Typography>
                <Divider />
                <Typography
                  className={classes.descriptionText}
                  variant="h6"
                  component="h5"
                >
                  <strong>Price:</strong>
                  <br />${data.price}
                </Typography>
                <Divider />
                <Typography
                  className={classes.descriptionText}
                  variant="body1"
                  component="p"
                >
                  <strong>Rating:</strong>
                  <br />
                  <Rating precision={0.5} value={data.rating} readOnly /> (
                  {data.numReviews})
                </Typography>
                <Divider />
                <Typography
                  className={classes.descriptionText}
                  variant="subtitle1"
                  component="h5"
                >
                  <strong>Description: </strong> <br /> {data.description}
                </Typography>
              </Paper>
            </Grid>
            <Grid item sm={12} md={3} className={classes.mobileFullWidth}>
              <Paper
                className={classes.buyWrapper}
                variant="outlined"
                elevation={3}
              >
                <Typography
                  className={classes.descriptionText}
                  variant="h6"
                  component="h5"
                >
                  <strong>Price:</strong>
                  <br />${data.price}
                </Typography>
                <Divider />
                <Typography
                  className={`${classes.descriptionText}`}
                  variant="h6"
                  component="h5"
                >
                  <strong>Status:</strong>
                  <br />
                  {data.countInStock > 0 ? (
                    <p className={classes.successText}>In Stock</p>
                  ) : (
                    <p className={classes.dangerText}>
                      Currently out of stock. Will be available later
                    </p>
                  )}
                </Typography>
                <Divider />
                {data.countInStock > 0 && (
                  <div className={classes.quantityControllerWrapper}>
                    <Typography
                      className={`${classes.descriptionText}`}
                      variant="h6"
                      component="h5"
                    >
                      <strong>Qty:</strong>
                    </Typography>
                    <FormControl
                      variant="filled"
                      style={{ marginTop: "8px", marginBottom: "8px" }}
                    >
                      <InputLabel id="qty-label">Qty</InputLabel>
                      <Select
                        native
                        labelId="qty-label"
                        id="qty-label"
                        value={quantity}
                        // issue: https://github.com/mui-org/material-ui/issues/16065
                        onChange={(e: React.ChangeEvent<{ value: any }>) => {
                          setQuantity(e.target.value);
                        }}
                      >
                        {[...Array(data.countInStock).keys()].map(
                          (quantityNum) => (
                            <option
                              key={quantityNum + 1}
                              value={quantityNum + 1}
                            >
                              {quantityNum + 1}
                            </option>
                          )
                        )}
                      </Select>
                    </FormControl>
                  </div>
                )}

                <Divider />
                <Button
                  className={classes.ButtonWrapper}
                  onClick={cartHandler}
                  variant="contained"
                  color="secondary"
                  fullWidth
                  disabled={data.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default ProductSceen;
