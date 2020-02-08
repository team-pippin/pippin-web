import React, { useState } from "react";
import { Box, Flex } from "rebass";
import NavBar from "../../components/Navigation";
import SideNav from "../../components/SideNav/SideNav";

const ManageSchoolLayout = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  const maxContentWidth = expanded ? 250 : 80;

  return (
    <Flex>
      <SideNav isExpanded={expanded} onToggleExpanded={setExpanded} />
      <Flex ml={[80, 80, maxContentWidth]} width="100%" flexDirection="column">
        <NavBar authenticated={true} />
        <Box
          sx={{
            maxWidth: 1000,
            px: 3
          }}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default ManageSchoolLayout;
