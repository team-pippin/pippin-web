import React from "react";
import "./App.css";
import Router from "./Components/Router";
import { StripeProvider } from "react-stripe-elements";
import { ThemeProvider } from "emotion-theming";
import theme from "./Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
        <Router />
      </StripeProvider>
    </ThemeProvider>
  );
};

export default App;
