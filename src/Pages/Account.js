import React, { useContext, useEffect } from "react";
import { Heading, Box, Text } from "rebass";
import { Context as AuthContext } from "../context/auth/AuthContext";

const Account = () => {
  const { state, fetchAccount } = useContext(AuthContext);

  useEffect(() => {
    const fetch = async () => {
      await fetchAccount();
    };

    fetch();
  }, []);

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
      <Text>{state.account.name}</Text>
    </Box>
  );
};

export default Account;
