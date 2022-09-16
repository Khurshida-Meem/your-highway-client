import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import StepThree from "./step-three";
import FixedCard from "./fixed";
import { Container, Grid } from "@mui/material";

const steps = [
  "STEP ONE",
  "STEP TWO",
  "STEP THREE",
  
];

export default function Wrapper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div className="steppers">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      <Container>
        <Grid className="mt-3" container spacing={2}>
          <Grid item xs={12} md={8}>
            {activeStep === 0 && <StepOne />}
            {activeStep === 1 && <StepTwo />}
            {activeStep === 2 && <StepThree />}
            
          </Grid>
          <Grid
            sx={{ display: activeStep > 2 && "none" }}
            item
            xs={12}
            sm={8}
            md={4}
          >
            <FixedCard
              activeStep={activeStep}
              length={steps.length - 1}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
