import React, { useState } from "react";
import LoadingButton from "./LoadingButton";
import { Box, Text } from "rebass";
import { Label, Input } from "@rebass/forms";

const SignInForm = ({ loading, onSubmit, errorMessage }) => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Box
      as="form"
      onSubmit={event => {
        event.preventDefault();

        onSubmit({
          email: values.email,
          password: values.password
        });
      }}
    >
      <Label htmlFor="email" py={2}>
        Email
      </Label>
      <Input
        id="email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleInputChange}
      />

      <Label htmlFor="password" py={2}>
        Password
      </Label>
      <Input
        id="password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleInputChange}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <LoadingButton title="Sign In" loading={loading} />
    </Box>
  );
};

export default SignInForm;
