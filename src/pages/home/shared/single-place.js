import { Box, Container, Divider, Rating } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/footer";
import Navbar from "../../../components/Navbar";
import { THUNK_SERVER } from "../../../redux/server";
import { BannerBg } from "../../../styled.components";
import Hotels from "../../hotels";
import Comment from "./comment";

const SinglePlace = () => {
  const [place, setPlace] = useState({});
  const { placesId } = useParams();

  const { destination, country, thumb, description, star, starCount } =
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
      <BannerBg background={`${thumb}`}>
        <div className="banner-inset ">
          <Container sx={{ pt: 10 }}>
            <h1 className="display-3 text-white">{destination}</h1>
            <h1 className="display-6 text-white">{country}</h1>
          </Container>
        </div>
      </BannerBg>
      <Container sx={{ mt: 5 }}>
        <Box sx={{ display: { sm: "flex" } }}>
          <div>
            <img className="rounded" src={thumb} alt="" width="300px" />
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
            <p>{description}</p>
          </div>
        </Box>
        <Hotels />
        <Divider sx={{ mt: 3 }} />
        <Comment id={placesId} />
      </Container>
      <Footer />
    </div>
  );
};

export default SinglePlace;


// Find your next stay
// Search low prices on hotels, homes and much more...
