import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import SignUpForm from "../Components/SignUpForm";

const SignUp = ({ history }) => {
  const [loading, setLoading] = useState({ isLoading: false });
  const [error, setError] = useState({ message: "" });

  const onSubmit = async data => {
    try {
      setLoading({ isLoading: true });
      setError({ message: "" });

      const url = process.env.REACT_APP_API_BASE_URL + "api/accounts/sign-up";
      const response = await axios.post(url, {
        name: data.name,
        email: data.email,
        password: data.password
      });

      setLoading({ isLoading: false });

      history.push({
        pathname: "/payment",
        data: {
          accountId: response.data.account._id,
          token: response.data.token
        }
      });
    } catch (error) {
      setLoading({ isLoading: false });
      setError({ message: error.message });
      console.log(error);
    }
  };

  return (
    <SignUpForm
      errorMessage={error.message}
      loading={loading.isLoading}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(SignUp);
