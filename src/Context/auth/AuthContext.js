import pippinApi from "../../api/pippinApi";
import createDataContext from "../createDataContext";
import {
  SIGN_UP_ERROR,
  USER_SIGN_IN,
  CLEAR_ERRORS,
  SIGN_OUT,
  USER_SIGN_UP
} from "./AuthTypes";

const authReducer = (state, action) => {
  switch (action.type) {
    case SIGN_UP_ERROR:
      return { ...state, errorMessage: action.payload };

    case USER_SIGN_UP:
      return {
        token: action.payload.token,
        accountId: action.payload.accountId,
        errorMessage: ""
      };

    case USER_SIGN_IN:
      return {
        token: action.payload.token,
        accountId: action.payload.accountId,
        errorMessage: ""
      };

    case CLEAR_ERRORS:
      return { ...state, errorMessage: "" };

    case SIGN_OUT:
      return { token: null, accountId: null, errorMessage: "" };

    default:
      return state;
  }
};

const clearErrors = dispatch => () => {
  dispatch({ type: CLEAR_ERRORS });
};

const signOut = dispatch => () => {
  localStorage.removeItem("token");
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
    const accountId = response.data.account._id;
    localStorage.setItem("token", token);
    dispatch({ type: USER_SIGN_UP, payload: { token, accountId } });
    history.push("/payment");
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
    const accountId = response.data.account._id;

    localStorage.setItem("token", token);
    dispatch({ type: USER_SIGN_IN, payload: { token, accountId } });
    history.push("/account");
  } catch (error) {
    console.log(error);
    dispatch({ type: SIGN_UP_ERROR, payload: "Sign up error" });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut, clearErrors },
  {
    token: null,
    accountId: null,
    errorMessage: ""
  }
);
