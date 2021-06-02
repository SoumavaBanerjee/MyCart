import { withStyles } from "@material-ui/core";
import StepConnector from "@material-ui/core/StepConnector";

export const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage: `linear-gradient( 
        160deg
        , #becfdd 0%, #5888b0 50%, #28567b 100%)`,
    },
  },
  completed: {
    "& $line": {
      backgroundImage: `linear-gradient( 
        160deg
        , #becfdd 0%, #5888b0 50%, #28567b 100%)`,
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);
