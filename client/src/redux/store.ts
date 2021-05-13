import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const localStorageCartItems = localStorage.getItem("cartItems")
  ? JSON.stringify(localStorage.getItem("cartItems"))
  : [];

console.log(localStorageCartItems);

// type the cart properly later
const initialState = {
  Cart: {
    cartItems: localStorageCartItems as any,
  },
};
export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
