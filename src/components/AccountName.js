import React from "react";
import { Heading, Box } from "rebass";
import RoleTag from "./RoleTag";

const AccountName = ({ name, role }) => {
  const capitalize = s => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <Box my={[16, 36]}>
      <Heading fontSize={[4, 5]}>Welcome, {capitalize(name)}!</Heading>
      <RoleTag role={role} />
    </Box>
  );
};

export default AccountName;
