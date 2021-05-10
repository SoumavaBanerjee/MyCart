import { combineReducers } from "redux";
import productListReducer from "../reducers/productListReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
