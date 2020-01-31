import React from "react";
import { Heading, Box, Text, Flex } from "rebass";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  const listItems = articles.map(article => (
    <ArticleItem key={article._id} article={article} />
  ));

  return (
    <>
      <Heading>HELLO</Heading>
      <ul>{listItems}</ul>
    </>
  );
};

export default ArticleList;

// const listItems = numbers.map((number) =>
//     // Correct! Key should be specified inside the array.
//     <ListItem key={number.toString()}
//               value={number} />

//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
