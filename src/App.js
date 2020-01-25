import React from "react";
import "./App.css";
import Router from "./Components/Router";
import { StripeProvider } from "react-stripe-elements";

const App = () => {
  return (
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
      <Router />
    </StripeProvider>
  );
};

export default App;
