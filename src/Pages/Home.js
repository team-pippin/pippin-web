import React from "react";
import { Link } from "react-router-dom";
import { Heading, Box, Text, Button } from "rebass";

const Home = () => {
  return (
    <Box>
      <Heading mb={2} as="h1">
        Welcome to Pippin
      </Heading>
      <Text>Not much is here yet. But we're working on it.</Text>
      <Link to="/sign-up">
        <Button mt={3}>Get my App</Button>
      </Link>
    </Box>
  );
};

export default Home;
