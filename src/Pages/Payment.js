import React from "react";
import { Elements } from "react-stripe-elements";
import { withRouter } from "react-router-dom";
import PaymentCollector from "../components/PaymentCollector";
import { Box } from "rebass";

const Payment = ({ location }) => {
  console.log(location.data);

  return (
    <Box>
      <Elements>
        <PaymentCollector userData={location.data} />
      </Elements>
    </Box>
  );
};

export default withRouter(Payment);
