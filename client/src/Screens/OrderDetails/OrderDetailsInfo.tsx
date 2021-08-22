import React from "react";

import { Paper, Typography, Chip } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import useStyles from "./styles";
import { shippingAddress } from "../../Types";

interface Props {
  paymentMethod: string;
  shippingAddress?: shippingAddress | null;
  orderedBy: string;
  email: string;
  isPaid: boolean;
  paidAt?: string;
  isDelivered: boolean;
  deliveredAt?: string;
}

const OrderDetailsInfo: React.FC<Props> = ({
  shippingAddress,
  paymentMethod,
  orderedBy,
  email,
  isPaid,
  isDelivered,
  deliveredAt,
  paidAt,
}) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.orderComponents} elevation={3}>
        <Typography className={classes.orderText} component="h3" variant="h4">
          Shipping
        </Typography>
        <Typography component="p" variant="body1">
          {shippingAddress?.address},
        </Typography>
        <Typography component="p" variant="body1">
          {`${shippingAddress?.city}, ${shippingAddress?.postalCode}, ${shippingAddress?.country}`}
        </Typography>
        <Typography component="p" variant="body1">
          {`${orderedBy}`}
        </Typography>
        <Typography component="p" variant="body1">
          <a href={`mailto:${email}`}>{email}</a>
        </Typography>
        {isDelivered ? (
          <Alert variant="outlined" severity="warning">
            Delivered on {deliveredAt}
          </Alert>
        ) : (
          <Alert variant="outlined" severity="warning">
            Not Delivered
          </Alert>
        )}

        <Typography className={classes.orderText} component="h3" variant="h4">
          <hr className={classes.sectionDivider} />
          Payment
        </Typography>
        <Typography component="p" variant="body1">
          {paymentMethod}
        </Typography>
        {isPaid ? (
          <Alert variant="outlined" severity="success">
            paid on {paidAt}
          </Alert>
        ) : (
          <Alert variant="outlined" severity="warning">
            Not Paid
          </Alert>
        )}
      </Paper>
    </>
  );
};

export default OrderDetailsInfo;
