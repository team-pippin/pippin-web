import React from "react";
import { Link } from "react-router-dom";
import { Link as StyledLink, Flex, Box } from "rebass";

const NavBar = () => {
  return (
    <Flex px={2} alignItems="center">
      <Link to="/">
        <StyledLink variant="navLogo">Pippin</StyledLink>
      </Link>
      <Box mx="auto" />

      <Link to="/sign-up">
        <StyledLink variant="nav">Sign Up</StyledLink>
      </Link>
    </Flex>
  );
};

export default NavBar;