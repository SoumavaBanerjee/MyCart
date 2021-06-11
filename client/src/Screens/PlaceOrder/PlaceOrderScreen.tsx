import React from "react";
import {
  Button,
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
  const { cartItems } = cart;

  //  compute total, tax and shipping from cart
  const itemsPrice = cartItems.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  const shippingPrice = Number(
    itemsPrice > 2000 ? 0 : ((itemsPrice * 2) / 100).toFixed(2)
  );

  const taxPrice = Number((0.15 * itemsPrice).toFixed(2));

  const totalPrice = Number((itemsPrice + taxPrice + shippingPrice).toFixed(2));

  const paymentHandler = (e: React.MouseEvent) => {
    console.log("To payment");
  };

  const classes = useStyles();

  return (
    <>
      <Formsteps currentStep={3} />
      <Grid className={classes.orderDetailsWrapper} container>
        <Grid className={classes.orderContainer} item xs={12} md={8}>
          <Paper className={classes.orderComponents} elevation={3}>
            <Typography
              className={classes.orderText}
              component="h3"
              variant="h4"
            >
              Address
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
              component="h3"
              variant="h4"
            >
              <hr className={classes.sectionDivider} />
              Payment Method
            </Typography>
            <Typography variant="body1" component="p">
              {cart.paymentMethod}
            </Typography>
          </Paper>
          <Paper className={classes.orderComponents} elevation={3}>
            <Typography
              className={classes.orderText}
              component="h3"
              variant="h4"
            >
              Order Items
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
                          {" "}
                          {item.quantity} X ${item.price} = $
                          {item.price * item.quantity}{" "}
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
            <List style={{ padding: "8px" }}>
              <Typography
                component="p"
                variant="h4"
                style={{ textAlign: "center", margin: "16px 0" }}
              >
                Order Summary
              </Typography>
              <Divider />
              <ListItem className={`${classes.cartItem} ${classes.OrderItem}`}>
                <Typography component="span" variant="h5">
                  Items:
                </Typography>
                <Typography component="span" variant="h6">
                  $ {itemsPrice}
                </Typography>
              </ListItem>
              <Divider />
              <ListItem className={`${classes.cartItem} ${classes.OrderItem}`}>
                <Typography component="span" variant="h5">
                  Shippping:
                </Typography>
                <Typography component="span" variant="h6">
                  {shippingPrice > 0 ? `$ ${shippingPrice}` : "Free"}
                </Typography>
              </ListItem>
              <Divider />
              <ListItem className={`${classes.cartItem} ${classes.OrderItem}`}>
                <Typography component="span" variant="h5">
                  Tax:
                </Typography>
                <Typography component="span" variant="h6">
                  $ {taxPrice}
                </Typography>
              </ListItem>
              <Divider />
              <ListItem className={`${classes.cartItem} ${classes.OrderItem}`}>
                <Typography component="span" variant="h5">
                  Total:
                </Typography>
                <Typography component="span" variant="h6">
                  $ {totalPrice}
                </Typography>
              </ListItem>
              <Divider />
              <Button
                className={classes.ButtonWrapper}
                variant="contained"
                color="primary"
                onClick={paymentHandler}
                fullWidth
                disabled={cart.cartItems.length === 0}
              >
                Make Payment
              </Button>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default PlaceOrderScreen;
