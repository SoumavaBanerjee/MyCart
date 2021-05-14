import React, { useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import useAction from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import {
  Grid,
  Paper,
  Button,
  Typography,
  List,
  ListItem,
  Divider,
  LinearProgress,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
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

  const { addProductToCart } = useAction();
  const { cartItems } = useTypedSelector((state) => state.Cart);

  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      addProductToCart(productId, quantity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId, quantity]);

  return (
    <>
      <Typography component="h2" variant="h3" style={{ marginBottom: "16px" }}>
        Your Cart
      </Typography>
      <Grid container>
        <Grid item md={8}>
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
                    <ListItem key={item.product}>
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
                        <Typography variant="h6" component="div">
                          <Link
                            className={classes.cartLinkWrapper}
                            to={`/products/${item.product}`}
                          >
                            {item.name}
                          </Link>
                        </Typography>
                      </div>
                      <Divider absolute />
                      <div
                        className={`${classes.cartItem} ${classes.ListWrapper}`}
                      >
                        <Typography variant="h6" component="div">
                          <strong>$ {item.price}</strong>
                        </Typography>
                      </div>
                      <Divider absolute />
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
                            // issue: https://github.com/mui-org/material-ui/issues/16065
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
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          )}
        </Grid>
        <Grid item md={2}></Grid>
        <Grid item md={2}></Grid>
      </Grid>
    </>
  );
};

export default CartScreen;
