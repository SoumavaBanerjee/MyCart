import React, { FC, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import { LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import * as yup from "yup";
import { useFormik } from "formik";

import { Link, RouteComponentProps } from "react-router-dom";

import useAction from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import useStyles from "./styles";

interface Prop extends RouteComponentProps {}

const ProfileScreen: FC<Prop> = ({ location, history }) => {
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

  const { fetchUserDetails } = useAction();

  const { data, error, loading } = useTypedSelector(
    (state) => state.userProfile
  );

  const userLoginDetail = useTypedSelector((state) => state.userLogin);
  const { data: userInfo } = userLoginDetail;

  const formik = useFormik({
    initialValues: {
      name: data?.name || "",
      email: data?.email || "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("submitted");
    },
  });

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!data) {
        fetchUserDetails("profile");
      } else {
        formik.setFieldValue("name", data.name, false);
        formik.setFieldValue("email", data.email, false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, userInfo, data]);

  return (
    <>
      {loading && (
        <LinearProgress
          style={{ marginTop: "4px", marginBottom: "4px" }}
          color="primary"
        />
      )}
      <Grid container>
        <Grid item sm={12} md={3}>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <PersonIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Profile
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
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
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
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
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
                Update
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item sm={12} md={9}>
          <div className={classes.paper}>My Orders</div>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileScreen;
