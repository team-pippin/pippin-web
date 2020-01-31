import React, { useContext } from "react";
import SignUp from "../pages/SignUp";
import Payment from "../pages/Payment";
import { StripeProvider } from "react-stripe-elements";
import SchoolCreate from "../pages/SchoolCreate";
import SignIn from "../pages/SignIn";
import Account from "../pages/Account";
import { Context as AuthContext } from "../context/auth/AuthContext";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LogOut from "./LogOut";
import Layout from "../pages/layouts/Layout";
import PublicLayout from "../pages/layouts/PublicLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <PublicRoute path="/sign-up">
            <SignUp />
          </PublicRoute>
          <PublicRoute path="/sign-in">
            <SignIn />
          </PublicRoute>

          <PrivateRoute exact path="/">
            <Account />
          </PrivateRoute>

          <PrivateRoute path="/payment">
            <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
              <Payment />
            </StripeProvider>
          </PrivateRoute>
          <PrivateRoute path="/create-school">
            <SchoolCreate />
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
          <PublicLayout children={children} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
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
          <Layout children={children} />
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
