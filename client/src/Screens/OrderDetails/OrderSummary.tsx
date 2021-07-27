import React from "react";

import { Paper, Typography, List, Divider, ListItem } from "@material-ui/core";

import useStyles from "./styles";
import { shippingAddress } from "../../Types/";
import { Alert } from "@material-ui/lab";

interface Props {
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
}

const OrderSummary: React.FC<Props> = ({
  itemsPrice,
  shippingPrice,
  taxPrice,
  totalPrice,
}) => {
  const classes = useStyles();

  return (
    <>
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
      </List>
    </>
  );
};

export default OrderSummary;
