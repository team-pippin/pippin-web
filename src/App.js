import React from "react";
import "./App.css";
import Router from "./Components/Router";
import { StripeProvider } from "react-stripe-elements";

const App = () => {
  return (
    <StripeProvider apiKey="pk_test_DEkI1EWGgkFTw6ZT18iH5YFz002g9t06lO">
      <Router />
    </StripeProvider>
  );
};

export default App;
