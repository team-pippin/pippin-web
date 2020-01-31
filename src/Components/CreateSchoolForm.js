import React, { useState } from "react";
import { Heading, Box, Text, Flex } from "rebass";
import { Label, Input } from "@rebass/forms";
import LoadingButton from "./LoadingButton";

const CreateSchoolForm = ({ loading, errorMessage, handleSubmit }) => {
  const [values, setValues] = useState({
    name: "",
    city: "",
    state: "",
    zipCode: ""
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = event => {
    event.preventDefault();
    const { name, city, state, zipCode } = values;

    handleSubmit({
      name,
      city,
      state,
      postalCode: zipCode
    });
  };

  return (
    <Box>
      <Heading mb={2} as="h1">
        Your School
      </Heading>
      <Text>
        Let's create your first school! As soon as you're done, your school will
        be available in the Pippin App!
      </Text>

      <Box mt={3} as="form" onSubmit={onSubmit}>
        <Label htmlFor="name" py={2}>
          School
        </Label>
        <Input
          id="name"
          name="name"
          type="name"
          value={values.name}
          onChange={handleInputChange}
        />
        <Flex mt={2} mx={-2} mb={3}>
          <Box width={1 / 2} px={2}>
            <Label htmlFor="city" py={2}>
              City
            </Label>
            <Input
              type="city"
              id="city"
              name="city"
              value={values.city}
              onChange={handleInputChange}
            />
          </Box>
          <Box width={1 / 4} px={2}>
            <Label htmlFor="location" py={2}>
              State
            </Label>
            <Input
              id="state"
              name="state"
              value={values.state}
              onChange={handleInputChange}
            />
          </Box>
          <Box width={1 / 4} px={2}>
            <Label htmlFor="location" py={2}>
              Zip Code
            </Label>
            <Input
              id="zipCode"
              name="zipCode"
              value={values.zipCode}
              onChange={handleInputChange}
            />
          </Box>
        </Flex>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <LoadingButton loading={loading} title="Create School" />
      </Box>
    </Box>
  );
};

export default CreateSchoolForm;
