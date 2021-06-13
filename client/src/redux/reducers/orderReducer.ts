import { createOrderActionType } from "../action-types";
import { OrderActions } from "../actions";
import { order } from "../../Types";

interface orderState {
  success: boolean;
  error: string | null;
  data: order | null;
}

const initialState: orderState = {
  success: false,
  error: null,
  data: null,
};

const createOrderReducer = (
  state: orderState = initialState,
  action: OrderActions
): orderState => {
  switch (action.type) {
    case createOrderActionType.CREATE_ORDER:
      return { data: null, error: null, success: false };
    case createOrderActionType.CREATE_ORDER_SUCCESS:
      return { data: action.payload, error: null, success: true };
    case createOrderActionType.CREATE_ORDER_FALIURE:
      return { data: null, error: action.payload, success: false };
    default:
      return state;
  }
};

export default createOrderReducer;
