import React from "react";
import { Elements } from "react-stripe-elements";
import { withRouter } from "react-router-dom";
import PaymentCollector from "../Components/PaymentCollector";
import { Box } from "rebass";

const Payment = ({ location }) => {
  console.log(location.data);

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        px: 3
      }}
    >
      <Elements>
        <PaymentCollector userData={location.data} />
      </Elements>
    </Box>
  );
};

export default withRouter(Payment);
