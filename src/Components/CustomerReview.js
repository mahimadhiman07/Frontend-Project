import React from "react";
import Slider from "react-slick";
import { Avatar, Typography, Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    review: "This shop has the best products I have ever used. Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    review: "Amazing quality and fast delivery. I'll definitely shop again!",
  },
  {
    id: 3,
    name: "Michael Johnson",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    review: "Great customer service and affordable prices. Totally worth it!",
  },
  {
    id: 4,
    name: "Emily Davis",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    review: "I love this store! The products are top-notch, and the experience is seamless.",
  },
];

const CustomerReview = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div style={{marginBottom:"20px"}}>
    <Box
      sx={{
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Customer Reviews
      </Typography>
      <Slider {...sliderSettings}>
        {reviews.map((review) => (
          <Box key={review.id} sx={{ padding: "20px"}}>
            <Avatar
              src={review.photo}
              alt={review.name}
              sx={{
                width: "80px",
                height: "80px",
                margin: "0 auto",
                border: "3px solid #ff6347",
                mb: 2,
              }}
            />
            <Typography variant="h6" gutterBottom>
              {review.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontStyle: "italic",
                color: "gray",
              }}
            >
              "{review.review}"
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
    </div>
  );
};

export default CustomerReview;
