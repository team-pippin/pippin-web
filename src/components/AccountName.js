import React from "react";
import { Heading, Text, Box, Flex } from "rebass";
import RoleTag from "./RoleTag";

const AccountName = ({ name, role }) => {
  const capitalize = s => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <Box my={36}>
      <Heading fontSize={5}>Welcome, {capitalize(name)}!</Heading>
      <RoleTag role={role} />
    </Box>
  );
};

export default AccountName;
