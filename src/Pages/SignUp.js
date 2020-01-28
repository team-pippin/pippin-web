import React, { useState, useContext } from "react";
import SignUpForm from "../components/SignUpForm";
import { Box, Heading } from "rebass";
import { Context as AuthContext } from "../context/auth/AuthContext";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);

  const [loading, setLoading] = useState({ isLoading: false });
  const [error, setError] = useState({ message: "" });

  const history = useHistory();

  const onSubmit = async data => {
    try {
      setLoading({ isLoading: true });
      setError({ message: "" });

      await signUp(data.name, data.email, data.password, history);
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
        Sign Up
      </Heading>
      <SignUpForm
        errorMessage={error.message}
        loading={loading.isLoading}
        onSubmit={onSubmit}
      />
    </Box>
  );
};

export default SignUp;
