import React, { FC, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import useAction from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { RouteComponentProps, useHistory } from "react-router-dom";
import FormContainer from "../../Components/FormContainer";
import useStyles from "./styles";

import FormStepper from "../../Components/FormSteps";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";

interface Prop extends RouteComponentProps {}

const PaymentMethodScreen: FC<Prop> = ({ location }) => {
  const classes = useStyles();
  const history = useHistory();
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  const cart = useTypedSelector((state) => state.Cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) history.push("/login");

  const { savePaymentMethod } = useAction();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    savePaymentMethod(paymentMethod);
    history.push("/placeorder");
  };

  return (
    <>
      <FormStepper currentStep={2} />

      <FormContainer>
        <Typography className={classes.formHeader} component="h2" variant="h3">
          PAYMENT METHOD
        </Typography>
        <div className={classes.paper}>
          <form
            onSubmit={handleSubmit}
            className={classes.form}
            noValidate
            autoComplete="on"
          >
            <RadioGroup
              aria-label="payment method"
              name="paypal"
              value={paymentMethod}
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
            >
              <FormControlLabel
                value="paypal"
                control={<Radio />}
                label="Paypal"
              />
              <FormControlLabel
                value="stripe"
                control={<Radio />}
                label="Stripe"
              />
            </RadioGroup>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Continue
            </Button>
          </form>
        </div>
      </FormContainer>
    </>
  );
};

export default PaymentMethodScreen;
