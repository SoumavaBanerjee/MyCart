import React, { lazy, Suspense } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  LinearProgress,
} from "@material-ui/core";
import theme from "./theme/";
import useStyles from "./styles";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./app.css";

const LazyHomeScreen = lazy(() => import("./Screens/Home/HomeScreen"));
const LazyProductScreen = lazy(() => import("./Screens/Product/ProductSceen"));
const LazyCartScreen = lazy(() => import("./Screens/Cart/CartScreen"));
const LazySignInScreen = lazy(() => import("./Screens/SignIn/SignInScreen"));
const LazyRegisterScreen = lazy(
  () => import("./Screens/Register/RegistrationScreen")
);
const LazyUserProfileScreen = lazy(
  () => import("./Screens/UserProfile/Profile")
);
const LazyShippingScreen = lazy(
  () => import("./Screens/Shipping/ShippingScreen")
);
const LazyPaymentMethodScreen = lazy(
  () => import("./Screens/PaymentMethod/PaymentMethodScreen")
);

const LazyPlaceOrderScreen = lazy(
  () => import("./Screens/PlaceOrder/PlaceOrderScreen")
);

const LazyOrderDetailsScreen = lazy(
  () => import("./Screens/OrderDetails/OrderDetailsScreen")
);

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header themeType={"dark"} />
        <Container maxWidth={"lg"}>
          <Suspense
            fallback={
              <LinearProgress
                style={{ marginTop: "4px", marginBottom: "4px" }}
                color="primary"
              />
            }
          >
            <main className={classes.mainWrapper}>
              <Route path="/" exact component={LazyHomeScreen} />
              <Route path="/login" component={LazySignInScreen} />
              <Route path="/register" component={LazyRegisterScreen} />
              <Route path="/profile" component={LazyUserProfileScreen} />
              <Route path="/product/:id" component={LazyProductScreen} />
              <Route path="/cart/:id?" component={LazyCartScreen} />
              <Route path="/shipping" component={LazyShippingScreen} />
              <Route path="/payments" component={LazyPaymentMethodScreen} />
              <Route path="/placeorder" component={LazyPlaceOrderScreen} />
              <Route path="/order/:id" component={LazyOrderDetailsScreen} />
            </main>
          </Suspense>
        </Container>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
