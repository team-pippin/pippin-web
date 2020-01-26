import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import CreateSchoolForm from "../Components/CreateSchoolForm";

const SchoolCreate = ({ location, history }) => {
  const [loading, setLoading] = useState({ isLoading: false });
  const [error, setError] = useState({ message: "" });

  const handleSubmit = async data => {
    try {
      setLoading({ isLoading: true });
      setError({ message: "" });

      const url = process.env.REACT_APP_API_BASE_URL + "api/schools";
      await axios.post(url, data, {
        headers: { Authorization: "Bearer " + location.data.token }
      });

      setLoading({ isLoading: false });

      console.log("SCHOOL CREATED");

      history.push({ pathname: "/" });
    } catch (error) {
      console.log(error);
      setLoading({ isLoading: false });
      setError({ message: error.message });
    }
  };

  return (
    <CreateSchoolForm
      loading={loading.isLoading}
      errorMessage={error.message}
      handleSubmit={handleSubmit}
    />
  );
};

export default withRouter(SchoolCreate);
