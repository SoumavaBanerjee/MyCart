import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  "MuiStepper-root": {
    backgroundColor: theme.palette.background.default,
  },
}));
