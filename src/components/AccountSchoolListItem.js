import React from "react";
import { Box, Text, Heading, Card, Image, Flex } from "rebass";

const AccountSchoolListItem = ({ name }) => {
  return (
    <Card
      my={3}
      sx={{
        borderRadius: 4
      }}
    >
      <Flex>
        <Image
          ml={2}
          mr={3}
          src={
            "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
          }
          variant="avatar"
        />
        <Heading fontSize={3} my={2}>
          {name}
        </Heading>
      </Flex>
    </Card>
  );
};

export default AccountSchoolListItem;
