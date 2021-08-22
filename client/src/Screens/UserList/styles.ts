import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  userlist__heading: {
    display: "grid",
    placeItems: "center",
    height: "10vh",
    width: "100%",
  },
  avatar: {
    marginTop: "1em",
    backgroundColor: theme.palette.secondary.main,
  },
  tablePaper: {
    marginTop: theme.spacing(10),
  },
  tableCell: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  tableHead: {
    backgroundColor: theme.palette.primary.dark,
  },
}));
