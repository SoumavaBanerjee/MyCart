import { OrderActionType } from "../action-types";
import { OrderActions } from "../actions";
import { order, user } from "../../Types";

// all fields of order compulsory. name and email field of user optional
interface orderState {
  success: boolean;
  error: string | null;
  data: (order & { user?: Partial<Pick<user, "name" | "email">> }) | null;
}

const initialState: orderState = {
  success: false,
  error: null,
  data: null,
};

export const createOrderReducer = (
  state: orderState = initialState,
  action: OrderActions
): orderState => {
  switch (action.type) {
    case OrderActionType.CREATE_ORDER:
      return { data: null, error: null, success: false };
    case OrderActionType.CREATE_ORDER_SUCCESS:
      return { data: action.payload, error: null, success: true };
    case OrderActionType.CREATE_ORDER_FALIURE:
      return { data: null, error: action.payload, success: false };
    default:
      return state;
  }
};

export const fetchOrderDetailsReducer = (
  state: orderState = initialState,
  action: OrderActions
): orderState => {
  switch (action.type) {
    case OrderActionType.FETCH_ORDER_DETAILS:
      return { data: null, error: null, success: false };
    case OrderActionType.FETCH_ORDER_DETAILS_SUCCESS:
      return { data: action.payload, error: null, success: true };
    case OrderActionType.FETCH_ORDER_DETAILS_FAILURE:
      return { data: null, error: action.payload, success: false };
    default:
      return state;
  }
};

export const payOrderReducer = (
  state: orderState = initialState,
  action: OrderActions
): orderState => {
  switch (action.type) {
    case OrderActionType.PAY_ORDER:
      return { ...initialState };
    case OrderActionType.PAY_ORDER_SUCCESS:
      return { data: action.payload, error: null, success: true };
    case OrderActionType.PAY_ORDER_FAILURE:
      return { data: null, error: action.payload, success: true };
    case OrderActionType.PAY_ORDER_RESET:
      return initialState;
    default:
      return state;
  }
};
