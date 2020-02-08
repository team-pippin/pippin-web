import React, { useContext, useEffect } from "react";
import { Text } from "rebass";
import { useParams } from "react-router-dom";

const SchoolHome = () => {
  let { schoolId } = useParams();

  return (
    <>
      <Text>{schoolId}</Text>
    </>
  );
};

export default SchoolHome;
