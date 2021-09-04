import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  productlist__heading: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr auto",
    height: "20vh",
    width: "100%",
  },
  productlist__heading__btn: {
    gridRow: "2/3",
    gridColumn: "2/3",
    justifySelf: "end",
    alignSelf: "center",
  },

  productlist__heading__text: {
    justifySelf: "end",
    alignSelf: "center",
    gridColumn: "1/2",
  },

  avatar: {
    backgroundColor: theme.palette.secondary.main,
    alignSelf: "end",
    justifySelf: "end",
    marginRight: "26px",
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
