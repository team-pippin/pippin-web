import React from "react";
import { Elements } from "react-stripe-elements";
import { withRouter } from "react-router-dom";

import PaymentCollector from "../Components/PaymentCollector";

class Payment extends React.Component {
  render() {
    return (
      <Elements>
        <PaymentCollector userData={this.props.location.data} />
      </Elements>
    );
  }
}

export default withRouter(Payment);
