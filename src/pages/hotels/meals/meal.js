import { Card, CardContent, Rating } from "@mui/material";
import React from "react";

const Meal = ({ data }) => {
  const { name, thumb, rating } = data;
  return (
    <Card>
      <CardContent className="text-center">
        <img src={thumb} alt="" height="100px" />
        <h5>{name}</h5>
        <Rating name="read-only" value={rating} readOnly />
      </CardContent>
    </Card>
  );
};

export default Meal;
