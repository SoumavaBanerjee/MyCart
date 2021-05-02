import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  navWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navButton: {
    marginRight: theme.spacing(2),
  },
}));
