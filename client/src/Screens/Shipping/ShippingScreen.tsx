import React, { FC, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { LinearProgress, Paper } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import * as yup from "yup";
import { useFormik } from "formik";

import { Link, RouteComponentProps } from "react-router-dom";
import FormContainer from "../../Components/FormContainer";
import useStyles from "./styles";

interface Prop extends RouteComponentProps {}

const ShippingScreen: FC<Prop> = ({ location, history }) => {
  const classes = useStyles();

  const validationSchema = yup.object({
    address: yup.string().required(),
    city: yup.string().required(),
    postalCode: yup.string().required(),
    country: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      address: "",
      city: "",
      postalCode: "",
      country: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <FormContainer>
        <div className={classes.paper}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
            className={classes.form}
            noValidate
            autoComplete="on"
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoFocus
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="city"
              label="city"
              name="city"
              autoFocus
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="postalCode"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
              error={
                formik.touched.postalCode && Boolean(formik.errors.postalCode)
              }
              helperText={formik.touched.postalCode && formik.errors.postalCode}
              label="postalCode"
              id="postalCode"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
              label="country"
              id="country"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </div>
      </FormContainer>
    </>
  );
};

export default ShippingScreen;
