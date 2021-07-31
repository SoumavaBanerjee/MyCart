import React, { useEffect } from "react";
import {
  Button,
  Grid,
  LinearProgress,
  Paper,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { RouteComponentProps } from "react-router-dom";

import useAction from "../../hooks/useAction";
import useStyles from "./styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import OrderDetailsInfo from "./OrderDetailsInfo";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";

// import calculateCartItemsPrice from "../../Utils/priceCalculations";

interface OrderId {
  id: string;
}

interface Prop extends RouteComponentProps<OrderId> {}

const PlaceOrderScreen: React.FC<Prop> = ({ history, match }) => {
  const { fetchOrderDetails } = useAction();

  // get data from store
  const { data, error, success } = useTypedSelector(
    (state) => state.orderDetails
  );

  console.log(data);

  useEffect(() => {
    fetchOrderDetails(match.params.id);
  }, [fetchOrderDetails, match.params.id]);

  // console.log(computedPrices);

  const classes = useStyles();

  return (
    <>
      {success && data ? (
        <>
          <Grid className={classes.orderDetailsWrapper} container>
            <Grid className={classes.orderContainer} item xs={12} md={8}>
              <OrderDetailsInfo
                paymentMethod={data.paymentMethod}
                shippingAddress={data.shippingAddress}
                orderedBy={data.user?.name as string}
                email={data.user?.email as string}
                isPaid={data.isPaid as boolean}
                isDelivered={data.isDelivered as boolean}
              />
              <CartItems products={data.orderItems} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.orderComponents} elevation={3}>
                <OrderSummary
                  {...{
                    itemsPrice: Number(
                      (
                        data?.totalPrice -
                        data?.shippingPrice +
                        data?.taxPrice
                      ).toFixed(2)
                    ),
                    taxPrice: data.taxPrice,
                    shippingPrice: data.shippingPrice,
                    totalPrice: data.totalPrice,
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </>
      ) : error ? (
        <>
          <Alert variant="outlined" severity="error">
            {error}
          </Alert>
        </>
      ) : (
        <>
          <LinearProgress
            style={{ marginTop: "4px", marginBottom: "4px" }}
            color="primary"
          />
        </>
      )}
    </>
  );
};
export default PlaceOrderScreen;
