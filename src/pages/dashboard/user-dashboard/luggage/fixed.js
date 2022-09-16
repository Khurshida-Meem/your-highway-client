import { Box, Card, CardContent } from "@mui/material";
import React from "react";

const FixedCard = ({ activeStep, length, handleNext, handleBack }) => {
  return (
    <Card sx={{ minWidth: 275, mb: { xs: 25, sm: 20 } }}>
      <Box className="primary-bg">
        <h6 className="py-3 text-center text-white">Luggage Summary</h6>
      </Box>
      <CardContent>
        <h3>Luggage data</h3>
        <Box className="d-flex">
          <button
            className="button px-4 dark-bg me-2"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </button>
          <button className="button px-4 dark-bg" onClick={handleNext}>
            {activeStep === length ? "Finish" : "Next"}
          </button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FixedCard;
