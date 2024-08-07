import React, { useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import useAction from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import {
  Grid,
  Paper,
  IconButton,
  Typography,
  List,
  ListItem,
  Divider,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";

import { Alert } from "@material-ui/lab";
import useStyles from "./styles";

interface matchId {
  id: string;
}

interface Props extends RouteComponentProps<matchId> {}

const CartScreen: React.FC<Props> = ({ match, location, history }) => {
  const classes = useStyles();
  const productId = match.params.id;
  const quantity = parseInt(
    location.search ? location.search.split("=")[1] : "1"
  );

  const { addProductToCart, removeProductFromCart } = useAction();
  const { cartItems } = useTypedSelector((state) => state.Cart);

  useEffect(() => {
    if (productId) {
      addProductToCart(productId, quantity);
    }
  }, [productId, quantity, addProductToCart]);

  const checkoutHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    history.push("/login?redirect=shipping");
  };

  return (
    <>
      <Typography component="h2" variant="h4" style={{ margin: "36px 0" }}>
        Your Cart (
        {cartItems.reduce(
          (accumulator, item) => accumulator + item.quantity,
          0
        )}{" "}
        items )
      </Typography>
      <Grid container>
        <Grid item md={7}>
          {cartItems.length === 0 ? (
            <Alert variant="outlined" severity="info">
              <Typography component="p">
                No items in cart{" "}
                <Link className={classes.linkWrapper} to="/">
                  Go Back
                </Link>
              </Typography>
            </Alert>
          ) : (
            <Grid container>
              <Paper elevation={3}>
                <List>
                  {cartItems.map((item) => (
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
                          <strong>$ {item.price}</strong>
                        </Typography>
                      </div>

                      <div className={classes.quantityButtonWrapper}>
                        <div
                          className={`${classes.cartItem} ${classes.ListWrapper}`}
                        >
                          <FormControl
                            variant="filled"
                            style={{ marginTop: "8px", marginBottom: "8px" }}
                          >
                            <InputLabel id="qty-label">Qty</InputLabel>
                            <Select
                              native
                              labelId="qty-label"
                              id="qty-label"
                              value={item.quantity}
                              onChange={(e) => {
                                addProductToCart(
                                  item.product,
                                  Number(e.target.value)
                                );
                              }}
                            >
                              {[...Array(item.countInStock).keys()].map(
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
                        <div className={`${classes.cartItem}`}>
                          <IconButton
                            aria-label="remove from cart"
                            color="secondary"
                            onClick={(e) => {
                              history.push("/cart");
                              removeProductFromCart(item.product);
                            }}
                          >
                            <DeleteIcon fontSize="large" />
                          </IconButton>
                        </div>
                      </div>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          )}
        </Grid>
        <Grid style={{ width: "100%" }} item md={5}>
          <Paper className={classes.checkoutWrapper} elevation={3}>
            <List style={{ padding: "8px" }}>
              <Typography
                component="p"
                variant="h4"
                style={{ textAlign: "center", margin: "16px 0" }}
              >
                Order Summary
              </Typography>
              <Divider />
              <ListItem
                className={`${classes.cartItem} ${classes.checkoutItem}`}
              >
                <Typography component="span" variant="h5">
                  Subtotal:
                </Typography>
                <Typography component="span" variant="h6">
                  <strong>
                    ${" "}
                    {cartItems
                      .reduce(
                        (accumulator, item) =>
                          accumulator + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </strong>
                </Typography>
              </ListItem>
              <Divider />
              <ListItem
                className={`${classes.cartItem} ${classes.checkoutItem}`}
              >
                <Typography component="span" variant="h5">
                  Delivery:
                </Typography>
                <Typography component="span" variant="h6">
                  <strong>Free</strong>
                </Typography>
              </ListItem>
              <Divider />
              <ListItem
                className={`${classes.cartItem} ${classes.checkoutItem}`}
              >
                <Typography component="span" variant="h5">
                  Total:
                </Typography>
                <Typography color="primary" component="span" variant="h5">
                  <strong>
                    ${" "}
                    {cartItems
                      .reduce(
                        (accumulator, item) =>
                          accumulator + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </strong>
                </Typography>
              </ListItem>
              <Divider />
              <Button
                className={classes.ButtonWrapper}
                variant="contained"
                color="primary"
                onClick={checkoutHandler}
                fullWidth
                disabled={
                  cartItems.reduce(
                    (accumulator, item) =>
                      accumulator + item.price * item.quantity,
                    0
                  ) <= 0
                }
              >
                Proceed To Checkout
              </Button>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CartScreen;
