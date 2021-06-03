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
