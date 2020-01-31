import pippinApi from "../../api/pippinApi";
import createDataContext from "../createDataContext";
import {
  GET_ARTICLES,
  POST_ARTICLE,
  CLEAR_ERRORS,
  ARTICLE_ERROR
} from "./ArticleTypes";

const authReducer = (state, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return { articles: action.payload, errorMessage: "" };

    case POST_ARTICLE:
      return {
        articles: action.payload,
        errorMessage: ""
      };

    case CLEAR_ERRORS:
      return { ...state, errorMessage: "" };

    case ARTICLE_ERROR:
      return { ...state, errorMessage: action.payload };

    default:
      return state;
  }
};

const clearErrors = dispatch => () => {
  dispatch({ type: CLEAR_ERRORS });
};

// TODO: - Pass in school id??

const getArticles = dispatch => () => {};
const postArticle = dispatch => () => {};

export const { Provider, Context } = createDataContext(
  authReducer,
  { getArticles, postArticle, clearErrors },
  {
    articles: [],
    errorMessage: ""
  }
);
