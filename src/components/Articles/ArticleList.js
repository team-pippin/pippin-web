import React from "react";
import ArticleItem from "./ArticleItem";
import Table from "react-bootstrap/Table";

const ArticleList = ({ articles }) => {
  const listItems = articles.map(article => (
    <ArticleItem key={article._id} article={article} />
  ));

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Date</th>
          <th>Title</th>
          <th>Subtitle</th>
          <th>Body</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>{listItems}</tbody>
    </Table>
  );
};

export default ArticleList;
