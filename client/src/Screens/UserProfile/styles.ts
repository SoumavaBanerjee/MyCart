import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
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
  tabs: {
    marginRight: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tabContainer: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
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
