import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Link as StyledLink, Flex, Text, Box } from "rebass";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import Payment from "../Pages/Payment";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Flex px={2} alignItems="center">
          <Text fontSize={[3, 4, 5]} p={3} fontWeight="bold">
            Pippin
          </Text>
          <Box mx="auto" />

          <Link to="/">
            <StyledLink variant="nav">Home</StyledLink>
          </Link>

          <Link to="/sign-up">
            <StyledLink variant="nav">Sign Up</StyledLink>
          </Link>
        </Flex>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
