import React from "react";
import { Link } from "react-router-dom";
import { Link as StyledLink, Flex, Box } from "rebass";

const NavBar = ({ authenticated }) => {
  return (
    <Flex px={2} alignItems="center">
      <Link to="/">
        <StyledLink variant="navLogo">Pippin</StyledLink>
      </Link>
      <Box mx="auto" />

      {authenticated ? (
        <>
          <StyledLink href="/account" variant="nav">
            Account
          </StyledLink>

          <StyledLink href="/log-out" variant="nav">
            Log Out
          </StyledLink>
        </>
      ) : (
        <>
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
