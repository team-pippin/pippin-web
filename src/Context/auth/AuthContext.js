import pippinApi from "../../api/pippinApi";
import createDataContext from "../createDataContext";
import {
  SIGN_UP_ERROR,
  USER_SIGN_IN,
  CLEAR_ERRORS,
  SIGN_OUT,
  USER_SIGN_UP,
  FETCH_ACCOUNT
} from "./AuthTypes";

const authReducer = (state, action) => {
  switch (action.type) {
    case SIGN_UP_ERROR:
      return { ...state, errorMessage: action.payload };

    case USER_SIGN_UP:
      return {
        token: action.payload.token,
        account: action.payload.account,
        errorMessage: ""
      };

    case USER_SIGN_IN:
      return {
        token: action.payload.token,
        account: action.payload.account,
        errorMessage: ""
      };

    case FETCH_ACCOUNT:
      return {
        ...state,
        account: action.payload,
        errorMessage: ""
      };

    case CLEAR_ERRORS:
      return { ...state, errorMessage: "" };

    case SIGN_OUT:
      return { token: null, account: null, errorMessage: "" };

    default:
      return state;
  }
};

const clearErrors = dispatch => () => {
  dispatch({ type: CLEAR_ERRORS });
};

const signOut = dispatch => () => {
  localStorage.removeItem("token");
  localStorage.removeItem("account");
  dispatch({ type: SIGN_OUT });
};

const signUp = dispatch => async (name, email, password, history) => {
  try {
    const response = await pippinApi.post("api/accounts/sign-up", {
      name,
      email,
      password
    });

    const token = response.data.token;
    const account = response.data.account;

    localStorage.setItem("token", token);
    localStorage.setItem("account", JSON.stringify(account));

    dispatch({ type: USER_SIGN_UP, payload: { token, account } });
    history.push({ pathname: "/payment", data: account });
  } catch (error) {
    console.log(error);
    dispatch({ type: SIGN_UP_ERROR, payload: "Sign up error" });
  }
};

const signIn = dispatch => async (email, password, history) => {
  try {
    const response = await pippinApi.post("api/accounts/sign-in", {
      email,
      password
    });

    const token = response.data.token;
    const account = response.data.account;

    localStorage.setItem("token", token);
    localStorage.setItem("account", JSON.stringify(account));

    dispatch({ type: USER_SIGN_IN, payload: { token, account } });
    history.push({ pathname: "/", data: account });
  } catch (error) {
    console.log(error);
    dispatch({ type: SIGN_UP_ERROR, payload: "Sign up error" });
  }
};

const fetchAccount = dispatch => async () => {
  try {
    const id = JSON.parse(localStorage.getItem("account"))._id;
    const response = await pippinApi.get(`api/accounts/${id}`);
    const account = response.data.account;

    localStorage.setItem("account", JSON.stringify(account));

    dispatch({ type: FETCH_ACCOUNT, payload: account });
  } catch (error) {
    console.log(error);
    dispatch({ type: SIGN_UP_ERROR, payload: "Sign up error" });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut, fetchAccount, clearErrors },
  {
    token: localStorage.getItem("token"),
    account: JSON.parse(localStorage.getItem("account")),
    errorMessage: ""
  }
);
