import React from "react";
import { injectStripe } from "react-stripe-elements";
import CardSection from "./CardSection";
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
      "http://localhost:5000/api/accounts/" +
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
        <button>Subscribe</button>
      </form>
    );
  }
}

export default injectStripe(PaymentCollector);
