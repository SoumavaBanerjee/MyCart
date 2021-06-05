import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  shippingPaper: {
    padding: "0 8px",
    borderRadius: "3px",
  },
  formHeader: {
    position: "relative",
    textAlign: "center",
    "&::after": {
      position: "absolute",
      content: `""`,
      height: " 2px",
      bottom: "-5px",
      margin: "0 auto",
      left: 0,
      right: 0,
      width: "13%",
      background: theme.palette.primary.dark,
      transition: ".5s",
    },
    "&:hover": {
      "&:after": {
        width: "23%",
      },
    },
  },
}));
