import React from "react";
import { Box, Text, Flex } from "rebass";

const SideNavItem = ({ title, icon, expanded, selected }) => {
  return (
    <Box
      p={1}
      mt={2}
      variant="sideNavItem"
      sx={{
        color: "white",
        backgroundColor: selected ? "secondary" : "none",
        borderRadius: 4
      }}
    >
      <Flex m={1} alignItems="center">
        <Flex ml={1} mr={2}>
          {icon}
        </Flex>
        <Text>{expanded ? title : ""}</Text>
      </Flex>
    </Box>
  );
};

export default SideNavItem;
