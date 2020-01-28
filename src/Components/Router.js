import React, { useContext } from "react";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Payment from "../pages/Payment";
import NavBar from "./Navigation";
import SchoolCreate from "../pages/SchoolCreate";
import SignIn from "../pages/SignIn";
import Account from "../pages/Account";
import { Context as AuthContext } from "../context/auth/AuthContext";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LogOut from "./LogOut";

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
          <PublicRoute path="/sign-up">
            <SignUp />
          </PublicRoute>
          <PublicRoute path="/sign-in">
            <SignIn />
          </PublicRoute>

          <PrivateRoute path="/payment">
            <Payment />
          </PrivateRoute>
          <PrivateRoute path="/create-school">
            <SchoolCreate />
          </PrivateRoute>
          <PrivateRoute path="/account">
            <Account />
          </PrivateRoute>
          <PrivateRoute path="/log-out">
            <LogOut />
          </PrivateRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const PublicRoute = ({ children, ...rest }) => {
  const { state } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.token === null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/account",
              state: { from: location }
            }}
          />
        )
      }
    />
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
