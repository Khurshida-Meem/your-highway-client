import React from "react";
import map from "../../../assets/map.png";
import globe from "../../../assets/globe.png";
import ballon from "../../../assets/air-ballone.png";
import { Container, Grid } from "@mui/material";
import Header from "../shared/header";

let key = 0;

const data = [
  {
    img: map,
    title: "Handpicked Hotels",
    desc: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
  {
    img: globe,
    title: "World Class Service",
    desc: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
  {
    img: ballon,
    title: "Best Price Guarantee",
    desc: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
];

const WhyChoose = () => {
  return (
    <Container sx={{ mt: 15 }}>
      <Header
        title={"Why Choose Us"}
        paragraph={"Here are reasons you should plan trip with us"}
      />
      <Grid className='mt-2' container spacing={2}>
        {data.map((row) => (
          <Grid xs={12} sm={6} md={4} item key={key++}>
            <div className="text-center">
              <img className="text-center" src={row.img} alt="" width="150px" />
            </div>

            <h3 className="text-center">{row.title}</h3>
            <p className="text-center">{row.desc}</p>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyChoose;
