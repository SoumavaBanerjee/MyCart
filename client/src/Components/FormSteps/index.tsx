import React from "react";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { StepIconProps } from "@material-ui/core/StepIcon";

import { useColorlibStepIconStyles } from "./colorlibStepStyles";
import { ColorlibConnector } from "./colorLibConnector";
import {
  AccountBalance,
  LocalShipping,
  PeopleAlt,
  ShoppingBasket,
} from "@material-ui/icons";

interface Props {
  currentStep: number;
}

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <PeopleAlt fontSize="small" />,
    2: <LocalShipping fontSize="small" />,
    3: <AccountBalance fontSize="small" />,
    4: <ShoppingBasket fontSize="small" />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

function getSteps() {
  return ["SignIn", "Shippping", "Payment", "placeOrder"];
}

const FormStepper: React.FC<Props> = ({ currentStep }) => {
  const steps = getSteps();

  return (
    <div>
      <Stepper
        alternativeLabel
        activeStep={currentStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default FormStepper;
