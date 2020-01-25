import React from "react";
import { Heading, Box } from "rebass";

const Home = () => {
  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        px: 3
      }}
    >
      <Heading as="h1">Home</Heading>
    </Box>
  );
};

export default Home;
