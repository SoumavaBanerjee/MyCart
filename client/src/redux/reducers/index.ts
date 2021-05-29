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

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  Cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  fetchUserProfile: fetchUserProfileReducer,
  updateUserProfile: updateUserProfileReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
