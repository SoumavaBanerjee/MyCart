import React from "react";
import { ThemeProvider, CssBaseline, Container } from "@material-ui/core";
import theme from "./theme";
import useStyles from "./styles";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import HomeScreen from "./Screens/Home/HomeScreen";
import ProductScreen from "./Screens/Product/ProductSceen";
import CartScreen from "./Screens/Cart/CartScreen";
import SignInScreen from "./Screens/SignIn/SignInScreen";
import RegistrationScreen from "./Screens/Register/RegistrationScreen";
import UserProfileScreen from "./Screens/UserProfile/Profile";
import ShippingScreen from "./Screens/Shipping/ShippingScreen";
import PaymentMethodScreen from "./Screens/PaymentMethod/PaymentMethodScreen";

// reset autocomplete background colors by chrome
import "./app.css";

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header themeType={"dark"} />
        <Container maxWidth={"lg"}>
          <main className={classes.mainWrapper}>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/login" component={SignInScreen} />
            <Route path="/register" component={RegistrationScreen} />
            <Route path="/profile" component={UserProfileScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payments" component={PaymentMethodScreen} />
          </main>
        </Container>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
