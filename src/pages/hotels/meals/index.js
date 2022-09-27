import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Meal from "./meal";

const Meals = ({ meals }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>Breakfast</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {meals?.breakfast?.map((data) => (
              <Grid xs={12} sm={6} md={4} item>
                <Meal data={data} />
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3>Lunch</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {meals?.lunch?.map((data) => (
              <Grid xs={12} sm={6} md={4} item>
                <Meal data={data} />
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3>Dinner</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {meals?.dinner?.map((data) => (
              <Grid xs={12} sm={6} md={4} item>
                <Meal data={data} />
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Meals;
