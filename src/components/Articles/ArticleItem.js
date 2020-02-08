import React from "react";
import { Text } from "rebass";

const ArticleItem = ({ article }) => {
  return (
    <tr>
      <td>{article.publishedDate}</td>
      <td>{article.title}</td>
      <td>{article.subtitle}</td>
      <td>{article.body}</td>
    </tr>
  );
};

export default ArticleItem;
