import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { blue, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
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
    fontFamily: "Lato",
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
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
  shape: {
    borderRadius: 10,
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
