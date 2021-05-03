import React from "react";
import { ThemeProvider, CssBaseline, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import theme from "./theme";
import useStyles from "./styles";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import HomeScreen from "./Screens/Home/HomeScreen";

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header themeType={"dark"} />
      <Container maxWidth={"lg"}>
        <main className={classes.mainWrapper}>
          <h2>Latest Products</h2>
          <HomeScreen />
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
