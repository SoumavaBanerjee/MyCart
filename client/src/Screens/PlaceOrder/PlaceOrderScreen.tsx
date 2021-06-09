import React from "react";
import {
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  Typography,
} from "@material-ui/core";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import Formsteps from "../../Components/FormSteps/";

import useStyles from "./styles";
import { Link } from "react-router-dom";
import { Alert } from "@material-ui/lab";

interface Props {}

const PlaceOrderScreen: React.FC<Props> = () => {
  const cart = useTypedSelector((state) => state.Cart);
  const classes = useStyles();

  return (
    <>
      <Formsteps currentStep={3} />
      <Grid className={classes.orderDetailsWrapper} container>
        <Grid className={classes.orderContainer} item xs={12} md={8}>
          <Paper className={classes.orderComponents} elevation={3}>
            <Typography
              className={classes.orderText}
              component="h4"
              variant="h5"
            >
              <strong>Address</strong>
            </Typography>
            <Typography component="p" variant="body1">
              {cart.shippingAddress?.address},
            </Typography>
            <Typography variant="body1" component="p">
              {cart.shippingAddress?.city},
            </Typography>
            <Typography variant="body1" component="p">
              {cart.shippingAddress?.postalCode},
            </Typography>
            <Typography variant="body1" component="p">
              {cart.shippingAddress?.country},
            </Typography>
            <Typography
              className={classes.orderText}
              component="h4"
              variant="h5"
            >
              <strong>Payment Method</strong>
            </Typography>
            <Typography variant="body1" component="p">
              {cart.paymentMethod}
            </Typography>
          </Paper>
          <Paper className={classes.orderComponents} elevation={3}>
            <Typography
              className={classes.orderText}
              component="h4"
              variant="h5"
            >
              <strong>Order Items</strong>
            </Typography>
            {cart.cartItems.length === 0 ? (
              <>
                <Alert variant="outlined" severity="info">
                  <Typography component="p">
                    No items in cart
                    {/* <Link className={classes.linkWrapper} to="/">
                      Go Back
                    </Link> */}
                  </Typography>
                </Alert>
              </>
            ) : (
              <>
                <List>
                  {cart.cartItems.map((item) => (
                    <ListItem className={classes.listItem} key={item.product}>
                      <div
                        className={`${classes.cartItem} ${classes.ListWrapper}`}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            height: "100%",
                            width: "50%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <Divider absolute />
                      <div
                        className={`${classes.cartItem} ${classes.ListWrapper}`}
                      >
                        <Typography variant="body1" component="div">
                          <Link
                            className={classes.cartLinkWrapper}
                            to={`/product/${item.product}`}
                          >
                            {item.name}
                          </Link>
                        </Typography>
                      </div>

                      <div
                        className={`${classes.cartItem} ${classes.ListWrapper}`}
                      >
                        <Typography variant="body1" component="div">
                          <strong>
                            {" "}
                            {item.quantity} x ${item.price} = $
                            {item.price * item.quantity}{" "}
                          </strong>
                        </Typography>
                      </div>
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.orderComponents} elevation={3}>
            <Typography component="h2" variant="h4">
              ORDER SUMMARY
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default PlaceOrderScreen;
