import React from "react";
import { Box } from "rebass";

const Layout = props => {
  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        px: 3
      }}
    >
      {this.props.children}
    </Box>
  );
};

export default Layout;
