import React, { useState } from "react";
import { Box, Flex } from "rebass";
import SideNavItem from "./SideNavItem";
import { Calendar, File } from "react-feather";
import { Link, useParams, useRouteMatch } from "react-router-dom";

const SideNav = ({ isExpanded, onToggleExpanded }) => {
  const maxWidth = isExpanded ? 250 : 80;
  const { schoolId } = useParams();
  const { path, url } = useRouteMatch();

  console.log(path);
  console.log(url);

  return (
    <Box
      sx={{
        position: "fixed",
        height: "100%",
        top: "0",
        left: "0",
        overflowX: "hidden"
      }}
      backgroundColor="primary"
      width={[80, 80, maxWidth]}
    >
      <Box mt={24} mx={3}>
        <Flex
          flexDirection="column"
          alignItems={isExpanded ? "stretch" : "center"}
        >
          <Link to={`/schools/${schoolId}/articles`}>
            <SideNavItem
              expanded={isExpanded}
              title="Articles"
              icon={<File />}
            />
          </Link>

          <Link to={`/schools/${schoolId}/calendar`}>
            <SideNavItem
              expanded={isExpanded}
              title="Calendar"
              icon={<Calendar />}
            />
          </Link>

          <Link to="/logout">
            <SideNavItem title="Logout" expanded={isExpanded} />
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default SideNav;
