import React from "react";

import { Paper, Typography, Chip, Radio } from "@material-ui/core";

import useStyles from "./styles";
import { shippingAddress } from "../../Types";

interface Props {
  paymentMethod: string;
  shippingAddress?: shippingAddress | null;
}

const OrderDetailsInfo: React.FC<Props> = ({
  shippingAddress,
  paymentMethod,
}) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.orderComponents} elevation={3}>
        <Typography className={classes.orderText} component="h3" variant="h4">
          Address
        </Typography>
        <Typography component="p" variant="body1">
          {shippingAddress?.address},
        </Typography>
        <Typography variant="body1" component="p">
          {shippingAddress?.city},
        </Typography>
        <Typography variant="body1" component="p">
          {shippingAddress?.postalCode},
        </Typography>
        <Typography variant="body1" component="p">
          {shippingAddress?.country},
        </Typography>
        <Typography className={classes.orderText} component="h3" variant="h4">
          <hr className={classes.sectionDivider} />
          Payment Method
        </Typography>
        <Radio
          checked={true}
          value={paymentMethod}
          name="radio-button-payament"
        />
        <Typography style={{ display: "inline" }} variant="body1" component="p">
          {paymentMethod}
        </Typography>
      </Paper>
    </>
  );
};

export default OrderDetailsInfo;
