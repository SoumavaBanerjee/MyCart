import { combineReducers } from "redux";
import productListReducer from "../reducers/productListReducer";
import productDetailsReducer from "../reducers/productDetailsReducer";
import cartReducer from "../reducers/cartReducer";
import userLoginReducer from "./UserLoginReducer";
import userRegisterReducer from "./userRegisterReducer";
import {
  fetchUserProfileReducer,
  updateUserProfileReducer,
} from "./userProfileReducer";

import {
  fetchOrderDetailsReducer,
  createOrderReducer,
  OrderPaidReducer,
} from "./orderReducer";

import fetchUserOrderListReducer from "./userOrderListReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  Cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  fetchUserProfile: fetchUserProfileReducer,
  updateUserProfile: updateUserProfileReducer,
  createOrder: createOrderReducer,
  orderDetails: fetchOrderDetailsReducer,
  orderPaid: OrderPaidReducer,
  userOrderList: fetchUserOrderListReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
