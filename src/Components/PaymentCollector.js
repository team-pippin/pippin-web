import React, { useState } from "react";
import { injectStripe } from "react-stripe-elements";
import CreditCardForm from "./CreditCardForm";
import axios from "axios";
import { withRouter } from "react-router-dom";
import LoadingButton from "./LoadingButton";
import { Text } from "rebass";

const PaymentCollector = ({ userData, stripe, history }) => {
  const [loading, setLoading] = useState({ isLoading: false });
  const [error, setError] = useState({ message: "" });

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      setLoading({ isLoading: true });
      setError({ message: "" });

      const stripeToken = await stripe.createToken({ type: "card" });
      await postUser(userData, stripeToken.token.id);

      setLoading({ isLoading: false });

      history.push({
        pathname: "/create-school",
        data: {
          token: this.props.userData.token
        }
      });
    } catch (error) {
      console.log(error);
      setLoading({ isLoading: false });
      setError({ message: error.message });
    }
  };

  const postUser = (user, stripeToken) => {
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

  return (
    <form onSubmit={handleSubmit}>
      <CreditCardForm />
      {error.message ? <Text>{error.message}</Text> : null}

      <LoadingButton title="Subscribe" loading={loading.isLoading} my={3} />
    </form>
  );
};

export default injectStripe(withRouter(PaymentCollector));
