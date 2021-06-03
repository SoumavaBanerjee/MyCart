import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { user, shippingAddress } from "../Types";

const localCartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems")!)
  : [];

const localShippingAddress = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress")!)
  : null;

const localLoginData = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData")!)
  : null;

// type the cart properly later
const initialState = {
  Cart: {
    cartItems: localCartItems,
    shippingAddress: localShippingAddress as shippingAddress,
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
