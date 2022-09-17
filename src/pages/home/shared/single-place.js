import { Box, Container, Divider, Rating } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/footer";
import Navbar from "../../../components/Navbar";
import { THUNK_SERVER } from "../../../redux/server";
import Comment from "./comment";

const SinglePlace = () => {
  const [place, setPlace] = useState({});
  const { placesId } = useParams();

  const { destination, country, thumb, description, cost, star, starCount } =
    place;

  useEffect(() => {
    (async () => {
      let response = await fetch(THUNK_SERVER + `places/${placesId}`);
      response = await response.json();
      setPlace(response);
    })();
  }, [placesId]);

  return (
    <div>
      <Navbar />
      <Container sx={{ mt: 5 }}>
        <Box sx={{ display: { sm: "flex" } }}>
          <div>
            <img className="rounded" src={thumb} alt="" width='300px' />
            <div className="mt-2">
              <Rating
                name="read-only"
                value={parseFloat(star)}
                precision={0.5}
                readOnly
              />
              <h6>Rated by {starCount} peoples.</h6>
            </div>
          </div>
          <div className="mx-3">
            <h3>{destination}</h3>
            <h5>{country}</h5>
            <p>{description}</p>
          </div>
        </Box>
        <Divider sx={{ mt: 3 }} />
        <Comment />
      </Container>
      <Footer />
    </div>
  );
};

export default SinglePlace;
