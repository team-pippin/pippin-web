import React from "react";
import { Link } from "react-router-dom";
import { Box, Text } from "rebass";
import AccountSchoolListItem from "./AccountSchoolListItem";

const AccountSchoolList = ({ schools }) => {
  const listItems = schools.map(school => (
    <Link
      to={`/schools/${school._id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <AccountSchoolListItem
        key={school._id}
        name={school.name}
        city={school.city}
        state={school.state}
        zip={school.postalCode}
      />
    </Link>
  ));

  return (
    <>
      <Box>
        <Text fontSize={1} fontWeight="bold" color="grey">
          MANAGE SCHOOLS
        </Text>
        {listItems}
      </Box>
    </>
  );
};

export default AccountSchoolList;
