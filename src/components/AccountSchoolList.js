import React from "react";
import { Box, Text, Heading, Card, Image, Flex } from "rebass";
import AccountSchoolListItem from "./AccountSchoolListItem";

const AccountSchoolList = ({ schools }) => {
  const listItems = schools.map(school => (
    <AccountSchoolListItem name={school.name} />
  ));

  return (
    <Box mt={24}>
      <Text fontSize={1} fontWeight="bold" color="grey">
        MANAGE SCHOOLS
      </Text>
      {listItems}
    </Box>
  );
};

export default AccountSchoolList;
