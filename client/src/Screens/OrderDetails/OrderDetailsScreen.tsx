import React, { useEffect } from "react";
import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Link, RouteComponentProps } from "react-router-dom";

import useAction from "../../hooks/useAction";
import useStyles from "./styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import Formsteps from "../../Components/FormSteps/";
import OrderDetailsInfo from "./OrderDetailsInfo";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";

import calculateCartItemsPrice from "../../Utils/priceCalculations";

interface Prop extends RouteComponentProps {}

const PlaceOrderScreen: React.FC<Prop> = ({ history }) => {
  const cart = useTypedSelector((state) => state.Cart);
  const { cartItems } = cart;
  const { createOrder } = useAction();

  // compute item, total, tax and shipping from cart
  const computedPrices = calculateCartItemsPrice(cartItems);
  const { shippingPrice, taxPrice, totalPrice } = computedPrices;

  // get order state from store
  const {
    data: order,
    error,
    success,
  } = useTypedSelector((state) => state.createOrder);

  useEffect(() => {
    // get to order_id screen upon order completion
    if (success && order) {
      history.push(`/order/${order._id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, success]);

  const paymentHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    createOrder({
      orderItems: cartItems,
      paymentMethod: cart.paymentMethod,
      shippingAddress: cart.shippingAddress,
      shippingPrice,
      taxPrice,
      totalPrice,
    });
  };

  const classes = useStyles();

  return (
    <>
      <Formsteps currentStep={3} />
      <Grid className={classes.orderDetailsWrapper} container>
        <Grid className={classes.orderContainer} item xs={12} md={8}>
          <OrderDetailsInfo
            paymentMethod={cart.paymentMethod}
            shippingAddress={cart.shippingAddress}
          />
          <CartItems products={cart.cartItems} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.orderComponents} elevation={3}>
            {error && (
              <ListItem>
                <Alert variant="outlined" severity="error">
                  {error}
                </Alert>
              </ListItem>
            )}
            <OrderSummary {...computedPrices} />
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
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default PlaceOrderScreen;
