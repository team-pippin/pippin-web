import React, { useContext, useEffect } from "react";
import { Heading, Box, Text } from "rebass";
import ArticleList from "./Articles/ArticleList";
import { Context as ArticleContext } from "../context/article/ArticleContext";

const SchoolArticles = () => {
  const { state, getArticles } = useContext(ArticleContext);

  useEffect(() => {
    const fetch = async () => {
      await getArticles();
    };

    fetch();
  }, []);

  return (
    <Box>
      <Heading mb={2} as="h1">
        Articles
      </Heading>
      <ArticleList articles={state.articles} />
    </Box>
  );
};

export default SchoolArticles;
