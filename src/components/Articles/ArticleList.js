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
        </tr>
      </thead>
      <tbody>{listItems}</tbody>
    </Table>
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
