import pippinApi from "../../api/pippinApi";
import createDataContext from "../createDataContext";
import { CLEAR_ERRORS, FETCH_SCHOOLS, SCHOOL_ERROR } from "./AccountTypes";

const authReducer = (state, action) => {
  switch (action.type) {
    case CLEAR_ERRORS:
      return { ...state, errorMessage: "" };
    case FETCH_SCHOOLS:
      return { schools: action.payload.schools, errorMessage: "" };
    case SCHOOL_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const clearErrors = dispatch => () => {
  dispatch({ type: CLEAR_ERRORS });
};

const fetchSchools = dispatch => async () => {
  try {
    const id = JSON.parse(localStorage.getItem("account"))._id;
    const response = await pippinApi.get(`api/accounts/${id}/managed-schools`);
    const schools = response.data;

    dispatch({ type: FETCH_SCHOOLS, payload: { schools } });
  } catch (error) {
    console.log(error);
    dispatch({ type: SCHOOL_ERROR, payload: "Sign up error" });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { fetchSchools, clearErrors },
  {
    schools: [],
    errorMessage: ""
  }
);
