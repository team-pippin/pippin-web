import React, { useEffect, useContext } from "react";
import { Heading, Box } from "rebass";
import axios from "axios";
import { Context as AuthContext } from "../Context/auth/AuthContext";

const Account = () => {
  const { state } = useContext(AuthContext);

  useEffect(() => {
    console.log(state.accountId);
  }, [state]);

  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        px: 3
      }}
    >
      <Heading mb={2} as="h1">
        Account
      </Heading>
    </Box>
  );
};

export default Account;
