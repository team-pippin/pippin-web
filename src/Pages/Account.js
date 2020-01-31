import React, { useContext, useEffect } from "react";
import { Heading, Box, Text, Flex } from "rebass";
import { Tiles } from "@rebass/layout";
import { Context as AuthContext } from "../context/auth/AuthContext";
import AccountName from "../components/AccountName";
import AccountSchoolList from "../components/AccountSchoolList";

const Account = () => {
  const { state, fetchAccount } = useContext(AuthContext);

  useEffect(() => {
    const fetch = async () => {
      await fetchAccount();
    };

    fetch();
  }, []);

  return (
    <Flex mt={100}>
      <Box width={1 / 2}>
        <AccountName name={state.account.name} role={"Admin"} />
        <Box height={72} />
        <AccountSchoolList
          schools={[
            { name: "Bozeman High School" },
            { name: "Bozeman Middle School" }
          ]}
        />
      </Box>
      <Box width={1 / 2}>
        <Flex>
          <Text>Hello</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Account;
