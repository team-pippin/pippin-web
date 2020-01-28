import React from "react";
import Router from "./components/Router";
import { StripeProvider } from "react-stripe-elements";
import { ThemeProvider } from "emotion-theming";
import theme from "./Theme";
import { Provider as AuthProvider } from "./context/auth/AuthContext";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </StripeProvider>
    </ThemeProvider>
  );
};

export default App;
