import React, { FC, useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

import { Link, RouteComponentProps } from "react-router-dom";
import FormContainer from "../../Components/FormContainer";

import useAction from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import useStyles from "./styles";
import registerSvg from "../../Assets/register.svg";
import { LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

interface Prop extends RouteComponentProps {}

const RegistrationScreen: FC<Prop> = ({ location, history }) => {
  const classes = useStyles();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState<string | null>(null);

  const { registerNewUser } = useAction();
  const { data, error, loading } = useTypedSelector(
    (state) => state.userRegister
  );
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (data) history.push(redirect);
  }, [redirect, history, data]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // dispatch only if passwords match up
    if (registerData.password !== registerData.confirmPassword) {
      setMessage("password not matching up. Please type correct password");
    } else {
      registerNewUser(
        registerData.name,
        registerData.email,
        registerData.password
      );
    }
  };

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
          {message && (
            <Alert
              style={{ marginTop: "8px", width: "100%" }}
              variant="outlined"
              severity="error"
            >
              {message}
            </Alert>
          )}
          <form
            onSubmit={handleSubmit}
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
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
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
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
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
              name="confirm password"
              value={registerData.confirmPassword}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  confirmPassword: e.target.value,
                })
              }
              label="Confirm password"
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
