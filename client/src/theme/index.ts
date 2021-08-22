import { createTheme, responsiveFontSizes } from "@material-ui/core";
import shadows from "./shadows";
import { red, blue } from "@material-ui/core/colors";
const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: blue[300],
    },
    secondary: {
      main: red[200],
    },
  },
  typography: {
    fontFamily: "Lato,Prata",
    h1: {
      fontFamily: "Prata",
    },
    h2: {
      fontFamily: "Prata",
    },
    h3: {
      fontFamily: "Prata",
    },
    h4: {
      fontFamily: "Prata",
    },
    h5: {
      fontFamily: "Prata",
    },
    h6: {
      fontFamily: "Prata",
    },
    subtitle1: {
      fontFamily: "Lato",
    },
    body1: {
      fontFamily: "Lato",
      fontSize: 18,
      lineHeight: 2,
    },
  },
  shadows,
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
  shape: {
    borderRadius: 5,
  },
  overrides: {
    MuiStepper: {
      root: {
        background: "none",
        border: "none",
      },
    },
  },
});

export default responsiveFontSizes(theme);
