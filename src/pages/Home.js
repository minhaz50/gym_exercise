import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercieses from "../components/SearchExercieses";
import Exercises from "../components/Exercises";
function Home() {
  return (
    <Box>
      <HeroBanner />
      <SearchExercieses />
      <Exercises />
    </Box>
  );
}

export default Home;
