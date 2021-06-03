import { makeStyles } from "@material-ui/core";

export const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage: `linear-gradient( 
        160deg
        , #becfdd 0%, #5888b0 50%, #28567b 100%)`,
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage: `linear-gradient( 
      160deg
      , #becfdd 0%, #5888b0 50%, #28567b 100%)`,
  },
});
