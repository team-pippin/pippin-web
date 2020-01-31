import React from "react";
import SchoolArticles from "../components/Articles/SchoolArticles";
import { Provider as ArticleProvider } from "../context/article/ArticleContext";

const Articles = () => {
  return (
    <ArticleProvider>
      <SchoolArticles />
    </ArticleProvider>
  );
};

export default Articles;
