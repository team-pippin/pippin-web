import React from "react";
import { Text } from "rebass";

const ArticleItem = ({ article }) => {
  return <Text>{article.title}</Text>;
};

export default ArticleItem;
