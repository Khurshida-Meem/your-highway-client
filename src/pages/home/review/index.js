import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviewsData } from "../../../redux/reviews/actions";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import Review from "./review";
import { Container } from "@mui/material";
import Header from "../shared/header";

const Reviews = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews?.data);

  console.log(reviews);

  useEffect(() => {
    dispatch(fetchReviewsData());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Container sx={{ mt: 15 }}>
        <Header title={"Our Reviews"} />
        <div>
          <Slider {...settings}>
            {reviews?.map((data) => (
              <Review key={data._id} data={data} />
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
