import React from "react";
import Router from "./components/Router";
import { ThemeProvider } from "emotion-theming";
import theme from "./Theme";
import { Provider as AuthProvider } from "./context/auth/AuthContext";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
