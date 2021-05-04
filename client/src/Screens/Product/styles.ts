import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  ButtonWrapper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  imgWrapper: {
    boxShadow: "-4px 6px 42px 0px rgba(0,0,0,0.39)",
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      marginRight: "0",
      marginTop: "-1rem",
    },
  },
  descriptionWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      marginTop: "-1rem",
    },
  },
  descriptionText: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  buyWrapper: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    margin: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      margin: "0",
      marginTop: "4px",
    },
  },
  mobileFullWidth: {
    [theme.breakpoints.down("md")]: {
      minWidth: "100%",
    },
  },
}));
