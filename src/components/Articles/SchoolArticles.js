import React, { useContext, useEffect, useState } from "react";
import { Heading, Box } from "rebass";
import ArticleList from "./ArticleList";
import { Context as ArticleContext } from "../../context/article/ArticleContext";
import Button from "react-bootstrap/Button";
import AddSchoolModal from "./AddSchoolModal";

const SchoolArticles = ({ schoolId }) => {
  const { state, getArticles, postArticle } = useContext(ArticleContext);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = data => {
    console.log(data);

    postArticle(schoolId, data);
    handleClose();
  };

  useEffect(() => {
    const fetch = async () => {
      await getArticles(schoolId);
    };

    fetch();
  }, []);

  return (
    <Box>
      <Heading mb={2} as="h1">
        Articles
      </Heading>

      <Button variant="primary" onClick={handleShow}>
        Add News
      </Button>
      <Box mt={3}>
        <ArticleList articles={state.articles} />
      </Box>
      <AddSchoolModal
        showModal={showModal}
        handleClose={handleClose}
        submit={handleSubmit}
      />
    </Box>
  );
};

export default SchoolArticles;
