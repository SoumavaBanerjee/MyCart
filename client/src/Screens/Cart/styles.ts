import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  linkWrapper: {
    textDecoration: "underline",
    color: theme.palette.info.dark,
  },
  cartItemWrapper: {
    width: "100%",
    display: "flex",
    alignitems: "flex-start",
  },
  ListWrapper: {
    width: "100%",
  },
  cartItem: {
    padding: theme.spacing(1),
  },
  cartLinkWrapper: {
    textDecoration: "none",
    color: theme.palette.getContrastText(theme.palette.background.paper),
    "&:hover": {
      textDecoration: "underline",
    },
  },
  quantityButtonWrapper: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "space-between",
    },
  },
  listItem: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  checkoutWrapper: {
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      marginLeft: 0,
    },
  },
  ButtonWrapper: {
    margin: `${theme.spacing(2)} 0`,
  },
  checkoutItem: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  span: {
    width: "100%",
  },
}));
