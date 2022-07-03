import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import "./HeroBanner.css";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={800}
        letterSpacing="1px"
        mt={3}
        // fontFamily="'Finlandica', sans-serif"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Seweet, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="45px" mt={3}>
        Check out the most effective exercise.
      </Typography>
      {/* <Button className="explore_btn" href="#exercises">
        Explore Exercises
      </Button> */}
      <button className="explore_btn">Explore Exercises</button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize={200}
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
