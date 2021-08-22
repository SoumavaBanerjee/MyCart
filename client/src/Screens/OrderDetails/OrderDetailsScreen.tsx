import React, { useEffect, useState } from "react";
import { Grid, LinearProgress, Paper } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { PayPalButton } from "react-paypal-button-v2";

import { RouteComponentProps } from "react-router-dom";
import { getPaypalClientId } from "../../api/payments";

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
  const [sdkScriptReady, setsdkScriptReady] = useState({
    loading: false,
    loaded: false,
  });

  const { fetchOrderDetails, payOrder, resetOrderState } = useAction();

  const { data, error, success } = useTypedSelector(
    (state) => state.orderDetails
  );

  const {
    data: payData,
    error: payError,
    success: paySuccess,
  } = useTypedSelector((state) => state.orderPaid);

  useEffect(() => {
    fetchOrderDetails(match.params.id);
  }, [fetchOrderDetails, match.params.id]);

  useEffect(() => {
    const generatePaypalSdkScript = async () => {
      const { data: paypalClientId } = await getPaypalClientId();
      if (!sdkScriptReady.loading && !sdkScriptReady.loaded) {
        setsdkScriptReady({ loading: true, loaded: false });
        const script = document.createElement("script");
        script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}`;
        script.addEventListener("load", () =>
          setsdkScriptReady({ loading: false, loaded: true })
        );
        document.body.appendChild(script);
        console.log("append script");
      }
    };
    if (!data || paySuccess) {
      resetOrderState();
      fetchOrderDetails(match.params.id);
    } else if (!data.isPaid) {
      if (!window.paypal) {
        generatePaypalSdkScript();
      } else {
        setsdkScriptReady({ loaded: true, loading: false });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchOrderDetails, match.params.id, data, paySuccess, resetOrderState]);

  const successPaymentHandler = (paymentResult: any) => {
    console.log(paymentResult);
    payOrder(match.params.id, paymentResult);
  };

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
                orderedBy={data.user?.name!}
                email={data.user?.email!}
                isPaid={data.isPaid!}
                isDelivered={data.isDelivered!}
                paidAt={data.isPaid ? data.paidAt : undefined}
                deliveredAt={data.isDelivered ? data.DeliveredAt : undefined}
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
                {!sdkScriptReady && !(paySuccess && payData) ? (
                  <LinearProgress
                    style={{ marginTop: "4px", marginBottom: "4px" }}
                    color="primary"
                  />
                ) : (
                  <PayPalButton
                    amount={data.totalPrice}
                    onSuccess={successPaymentHandler}
                  />
                )}
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
