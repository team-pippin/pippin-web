import React from "react";
import SchoolArticles from "../components/Articles/SchoolArticles";
import { Provider as ArticleProvider } from "../context/article/ArticleContext";
import { useParams } from "react-router-dom";

const Articles = () => {
  const { schoolId } = useParams();

  return (
    <ArticleProvider>
      <SchoolArticles schoolId={schoolId} />
    </ArticleProvider>
  );
};

export default Articles;
