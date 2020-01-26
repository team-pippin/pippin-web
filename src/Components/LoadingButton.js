import React from "react";
import { Button } from "rebass";

const LoadingButton = ({ loading, title }) => {
  if (loading) {
    return (
      <Button my={3} py={3} px={4}>
        Loading...
      </Button>
    );
  } else {
    return (
      <Button my={3} py={3} px={4}>
        {title}
      </Button>
    );
  }
};

export default LoadingButton;
