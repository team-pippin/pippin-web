import React from "react";
import { Link as StyledLink, Flex, Box } from "rebass";

const NavBar = ({ authenticated }) => {
  return (
    <Flex px={2} alignItems="center">
      {authenticated ? (
        <>
          <Box mx="auto" />
          <StyledLink variant="navLogo">Pippin</StyledLink>
        </>
      ) : (
        <>
          <StyledLink variant="navLogo">Pippin</StyledLink>
          <Box mx="auto" />
          <StyledLink href="/sign-in" variant="nav">
            Sign In
          </StyledLink>

          <StyledLink href="/sign-up" variant="nav">
            Sign Up
          </StyledLink>
        </>
      )}
    </Flex>
  );
};

export default NavBar;
