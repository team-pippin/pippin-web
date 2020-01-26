import React, { useState } from "react";
import { Heading, Box, Text, Flex } from "rebass";
import { Label, Input } from "@rebass/forms";
import LoadingButton from "../Components/LoadingButton";
import axios from "axios";
import { withRouter } from "react-router-dom";

const SchoolCreate = () => {
  const [values, setValues] = useState({
    name: "",
    city: "",
    state: "",
    zipCode: ""
  });

  const { location } = this.props;

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const data = {
        name: values.name,
        city: values.city,
        state: values.state,
        postalCode: values.zipCode
      };
      await postSchool(location.data, data);
    } catch (error) {
      console.log(error);
    }
  };

  const postSchool = (token, data) => {
    const url = process.env.REACT_APP_API_BASE_URL + "api/schools";
    return axios.post(url, data, {
      headers: { Authorization: "Bearer " + token }
    });
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
        Your School
      </Heading>
      <Text>
        Let's create your first school! As soon as you're done, your school will
        be available in the Pippin App!
      </Text>

      <Box mt={3} as="form" onSubmit={handleSubmit}>
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
        <LoadingButton title="Create School" />
      </Box>
    </Box>
  );
};

export default withRouter(SchoolCreate);
