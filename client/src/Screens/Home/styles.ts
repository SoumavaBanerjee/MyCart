import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  carousel: {
    maxHeight: "50vh",
    maxWidth: "99%",
  },
  carousel__img: {
    width: "auto",
    height: "auto",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  carousel__container: {
    marginBottom: theme.spacing(4),
  },
  carousel__container__responsive: {
    margin: "20px 0",
  },
}));
