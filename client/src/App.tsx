import React from "react";
import { ThemeProvider, CssBaseline, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import theme from "./theme";
import useStyles from "./styles";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header themetype={"dark"} />
      <Container maxWidth={"lg"}>
        <main className={classes.mainWrapper}>
          <Typography variant="h3"> Welcome to MyCart </Typography>{" "}
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
