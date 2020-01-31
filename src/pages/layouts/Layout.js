import React, { useContext } from "react";
import { Box } from "rebass";
import NavBar from "../../components/Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar authenticated={true} />
      <Box
        sx={{
          maxWidth: 1000,
          mx: "auto",
          px: 3
        }}
      >
        {children}
      </Box>
    </div>
  );
};

export default Layout;
