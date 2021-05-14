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
}));
