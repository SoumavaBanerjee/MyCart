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
  avatar: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
    marginRight: theme.spacing(2),
    "&:hover": {
      cursor: "pointer",
    },
  },
  headerIconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "fit-content",
  },
  logo: {
    fontFamily: "Permanent Marker, cursive",
    backgroundColor: "#045de9",
    backgroundImage: "linear-gradient(315deg, #045de9 0%, #09c6f9 74%)",
    backgroundClip: "text",
    "-webkitBackgroundClip": "text",
    "-webkitTextFillColor": "transparent",
    webkitTextFillColor: "transparent",
    fontSize: 30,
  },
}));
