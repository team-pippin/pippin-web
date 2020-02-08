import React, { useContext } from "react";
import { StripeProvider } from "react-stripe-elements";
import { Provider as AccountProvider } from "../context/account/AccountContext";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Context as AuthContext } from "../context/auth/AuthContext";
import LogOut from "./LogOut";
import Layout from "../pages/layouts/Layout";
import PublicLayout from "../pages/layouts/PublicLayout";
import ManageSchoolLayout from "../pages/layouts/ManageSchoolLayout";
import SchoolHome from "../pages/SchoolHome";
import Articles from "../pages/Articles";
import SchoolCreate from "../pages/SchoolCreate";
import SignIn from "../pages/SignIn";
import Account from "../pages/Account";
import SignUp from "../pages/SignUp";
import Payment from "../pages/Payment";
import News from "../pages/Calendar";

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

          <ManagedSchoolRoute path={"/schools/:schoolId/articles"}>
            <Articles />
          </ManagedSchoolRoute>
          <ManagedSchoolRoute path={"/schools/:schoolId/calendar"}>
            <News />
          </ManagedSchoolRoute>
          <ManagedSchoolRoute path={"/schools/:schoolId"}>
            <SchoolHome />
          </ManagedSchoolRoute>
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
          <AccountProvider>
            <Layout children={children} />
          </AccountProvider>
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

const ManagedSchoolRoute = ({ children, ...rest }) => {
  const { state } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.token !== null ? (
          <AccountProvider>
            <ManageSchoolLayout children={children} />
          </AccountProvider>
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
