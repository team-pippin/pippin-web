import React from "react";
import { CardElement } from "react-stripe-elements";
import { Heading, Text, Box } from "rebass";

class CreditCardForm extends React.Component {
  createOptions = () => {
    return {
      style: {
        base: {
          fontSize: "18px",
          color: "#424770", // text
          fontFamily: "Open Sans, sans-serif",
          letterSpacing: "0.025em",
          "::placeholder": {
            color: "#aab7c4"
          }
        }
      }
    };
  };

  render() {
    return (
      <label>
        <Heading mb={2} as="h1">
          Enter Card Details
        </Heading>
        <Text>You will only be charged when you add your school.</Text>
        <Box my={4}>
          <CardElement {...this.createOptions()} />
        </Box>
      </label>
    );
  }
}

export default CreditCardForm;
