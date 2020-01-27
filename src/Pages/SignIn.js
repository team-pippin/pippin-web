import React, { useState, useContext } from "react";
import { Heading, Box } from "rebass";
import SignInForm from "../Components/SignInForm";
import { useHistory } from "react-router-dom";
import { Context as AuthContext } from "../Context/auth/AuthContext";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);

  const [loading, setLoading] = useState({ isLoading: false });
  const [error, setError] = useState({ message: "" });

  const history = useHistory();

  const onSubmit = async data => {
    setLoading({ isLoading: true });
    setError({ message: "" });
    try {
      await signIn(data.email, data.password, history);

      setLoading({ isLoading: false });
    } catch (error) {
      console.log(error);
      setLoading({ isLoading: false });
      setError({ message: error.message });
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        px: 3
      }}
    >
      <Heading mb={2} as="h1">
        Sign In
      </Heading>
      <SignInForm
        errorMessage={error.message}
        loading={loading.isLoading}
        onSubmit={onSubmit}
      />
    </Box>
  );
};

export default SignIn;
