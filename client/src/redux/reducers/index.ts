import { combineReducers } from "redux";
import productListReducer from "../reducers/productListReducer";
import productDetailsReducer from "../reducers/productDetailsReducer";
import cartReducer from "../reducers/cartReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  Cart: cartReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
