import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import Payment from "../Pages/Payment";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>

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
