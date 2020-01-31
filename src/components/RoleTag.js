import React from "react";
import { Text, Box, Flex } from "rebass";

const RoleTag = ({ role }) => {
  return (
    <Flex my={2} alignItems="center">
      <Text
        fontSize={0}
        px={2}
        py={1}
        fontWeight="bold"
        bg="primary"
        color="white"
        sx={{ borderRadius: 4 }}
      >
        {role.toUpperCase()}
      </Text>
      <Box mx="auto" />
    </Flex>
  );
};

export default RoleTag;
