import React, { useState } from "react";
import LoadingButton from "./LoadingButton";
import { Box, Text } from "rebass";
import { Label, Input } from "@rebass/forms";

const SignUpForm = ({ loading, onSubmit, errorMessage }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        px: 3
      }}
    >
      <Box
        as="form"
        onSubmit={event => {
          event.preventDefault();

          onSubmit({
            name: values.name,
            email: values.email,
            password: values.password
          });
        }}
      >
        <Label htmlFor="name" py={2}>
          Name
        </Label>
        <Input
          id="name"
          name="name"
          type="name"
          value={values.name}
          onChange={handleInputChange}
        />
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

        <LoadingButton title="Sign Up" loading={loading} />
      </Box>
    </Box>
  );
};

export default SignUpForm;
