import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { user } from "../Types";

const localCartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems")!)
  : [];

const localLoginData = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData")!)
  : null;

// type the cart properly later
const initialState = {
  Cart: {
    cartItems: localCartItems,
  },
  userLogin: {
    loading: false,
    error: null,
    data: localLoginData as user,
  },
};
export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
