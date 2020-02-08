import React, { useContext, useEffect } from "react";
import { Box, Text, Flex } from "rebass";
import { Context as AuthContext } from "../context/auth/AuthContext";
import { Context as AccountContext } from "../context/account/AccountContext";
import AccountName from "../components/AccountName";
import AccountSchoolList from "../components/AccountSchoolList";

const Account = () => {
  const { state: auth, fetchAccount } = useContext(AuthContext);
  const { state: account, fetchSchools } = useContext(AccountContext);

  useEffect(() => {
    const fetch = async () => {
      await fetchAccount();
    };

    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      await fetchSchools();
    };

    fetch();
  }, []);

  return (
    <>
      <AccountName name={auth.account.name} role={"Admin"} />
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]}>
          <AccountSchoolList schools={account.schools} />
        </Box>
        <Flex width={[1, 1 / 2]}>
          <Box pl={[0, 3, 5]}>
            <Text fontSize={3} fontWeight="bold">
              Welome to Pippin.
            </Text>
            <Text fontSize={3}>To get started select one of your schools.</Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Account;

// Centering content

/* <Flex justifyContent="center" width={[1, 1 / 2]}>
  <Box alignSelf="center" ml={4}>
    <Text fontSize={3}>Welome to Pippin.</Text>
    <Text fontSize={3}>To get Started, tap a school on the left.</Text>
  </Box>
</Flex> */
