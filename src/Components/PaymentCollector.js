import React from "react";
import { injectStripe } from "react-stripe-elements";
import CardSection from "./CardSection";
import { Button } from "rebass";
import axios from "axios";

class PaymentCollector extends React.Component {
  constructor(props) {
    super(props);

    this.postUser = this.postUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async event => {
    event.preventDefault();
    console.log("submit");
    try {
      const stripeToken = await this.props.stripe.createToken({ type: "card" });
      await this.postUser(this.props.userData, stripeToken.token.id);
    } catch (error) {
      console.log(error);
    }
  };

  postUser = (user, stripeToken) => {
    const url =
      process.env.REACT_APP_API_BASE_URL +
      "api/accounts/" +
      user.accountId +
      "/payment-methods";
    return axios.post(
      url,
      {
        source: stripeToken
      },
      {
        headers: { Authorization: "Bearer " + user.token }
      }
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection />
        <Button>Subscribe</Button>
      </form>
    );
  }
}

export default injectStripe(PaymentCollector);
