import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  orderComponents: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  orderDetailsWrapper: {
    marginTop: theme.spacing(3),
  },
  orderContainer: {
    display: "flex",
    flexDirection: "column",
  },
  orderText: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  linkWrapper: {
    textDecoration: "underline",
    color: theme.palette.info.dark,
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

  listItem: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  sectionDivider: {
    height: "1px",
    background: "rgba(255, 255, 255, 0.12)",
    width: "100%",
    border: "thin",
  },
  OrderItem: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  ButtonWrapper: {
    margin: `${theme.spacing(2)} 0`,
  },
}));
