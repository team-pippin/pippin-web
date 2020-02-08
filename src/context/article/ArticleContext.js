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

const getArticles = dispatch => async schoolId => {
  try {
    const response = await pippinApi.get(`api/schools/${schoolId}/articles`);
    const articles = response.data;

    dispatch({ type: GET_ARTICLES, payload: articles });
  } catch (error) {
    dispatch({ type: ARTICLE_ERROR, payload: "Failed to get Articles" });
  }
};

const postArticle = dispatch => async (schoolId, data) => {
  try {
    const response = await pippinApi.post(
      `api/schools/${schoolId}/articles`,
      data
    );
    const articles = response.data;

    dispatch({ type: GET_ARTICLES, payload: articles });
  } catch (error) {
    dispatch({ type: ARTICLE_ERROR, payload: "Failed to get Articles" });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { getArticles, postArticle, clearErrors },
  {
    articles: [],
    errorMessage: ""
  }
);
