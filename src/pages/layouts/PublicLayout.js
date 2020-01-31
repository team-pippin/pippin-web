import React from "react";
import NavBar from "../../components/Navigation";
import { Box } from "rebass";

const PublicLayout = ({ children }) => {
  return (
    <>
      <NavBar authenticated={false} />
      <Box
        sx={{
          maxWidth: 600,
          mx: "auto",
          px: 3
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default PublicLayout;
