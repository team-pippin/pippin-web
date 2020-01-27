import React, { useContext } from "react";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import Payment from "../Pages/Payment";
import NavBar from "./Navigation";
import SchoolCreate from "../Pages/SchoolCreate";
import SignIn from "../Pages/SignIn";
import Account from "../Pages/Account";
import { Context as AuthContext } from "../Context/auth/AuthContext";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const Router = () => {
  const { state } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div>
        <NavBar authenticated={state.token !== null} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>

          <PrivateRoute path="/payment">
            <Payment />
          </PrivateRoute>
          <PrivateRoute path="/create-school">
            <SchoolCreate />
          </PrivateRoute>
          <PrivateRoute path="/account">
            <Account />
          </PrivateRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const PrivateRoute = ({ children, ...rest }) => {
  const { state } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.token !== null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default Router;
