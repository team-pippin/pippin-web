import React from "react";
import { Text, Heading, Card, Image, Flex } from "rebass";

const AccountSchoolListItem = ({ name, city, state, zip }) => {
  return (
    <Card
      my={4}
      sx={{
        borderRadius: 6
      }}
    >
      <Flex my={2} alignItems="center" width="100%">
        <Image
          mx={2}
          my={1}
          src={
            "https://images.unsplash.com/photo-1527891751199-7225231a68dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
          }
          sx={{
            width: [48, 56],
            height: [48, 56],
            borderRadius: 9999
          }}
        />
        <Flex
          mx={2}
          alignItems="center"
          width="80%"
          justifyContent="space-between"
        >
          <Flex flexDirection="column">
            <Heading mb={[0, 1]} fontSize={[2, 3]}>
              {name}
            </Heading>
            <Text>
              {city}, {state} {zip}
            </Text>
          </Flex>
          <Flex>
            <Text fontSize={1} fontWeight="bold" color="grey">
              VIEW
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default AccountSchoolListItem;
