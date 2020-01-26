import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import Payment from "../Pages/Payment";
import NavBar from "./Navigation";
import SchoolCreate from "../Pages/SchoolCreate";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        {
          // Switch
        }
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
          <Route path="/create-school">
            <SchoolCreate />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
