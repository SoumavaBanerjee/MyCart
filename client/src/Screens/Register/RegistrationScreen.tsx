import React, { FC, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import * as yup from "yup";
import { useFormik } from "formik";

import { Link, RouteComponentProps } from "react-router-dom";
import FormContainer from "../../Components/FormContainer";

import useAction from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import useStyles from "./styles";
import registerSvg from "../../Assets/register.svg";

interface Prop extends RouteComponentProps {}

const RegistrationScreen: FC<Prop> = ({ location, history }) => {
  const classes = useStyles();

  const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      registerNewUser(values.name, values.email, values.password);
    },
  });

  const { registerNewUser } = useAction();
  const { data, error, loading } = useTypedSelector(
    (state) => state.userRegister
  );
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (data) history.push(redirect);
  }, [redirect, history, data]);

  return (
    <>
      {loading && (
        <LinearProgress
          style={{ marginTop: "4px", marginBottom: "4px" }}
          color="primary"
        />
      )}
      <FormContainer image={registerSvg}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          {error && (
            <Alert
              style={{ marginTop: "8px", width: "100%" }}
              variant="outlined"
              severity="error"
            >
              {error}
            </Alert>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
            className={classes.form}
            noValidate
            autoComplete="off"
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              label="ConfirmPassword"
              type="password"
              id="confirm password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  to={redirect ? `/login?redirect=${redirect}` : `/login`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Typography variant="body2" component="p">
                    Already have an account?{" "}
                    <span style={{ textDecoration: "underline" }}>Sign In</span>
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </FormContainer>
    </>
  );
};

export default RegistrationScreen;
