import { UserOrderListActionType } from "../action-types";
import { fetchOrderListActions } from "../actions";
import { order } from "../../Types";

interface orderListState {
  loading: boolean;
  error: string | null;
  data: order[] | null;
}

const initialState: orderListState = {
  loading: false,
  error: null,
  data: null,
};

const fetchUserOrderListReducer = (
  state: orderListState = initialState,
  action: fetchOrderListActions
): orderListState => {
  switch (action.type) {
    case UserOrderListActionType.FETCH_USER_ORDER_LIST:
      return { data: null, error: null, loading: true };
    case UserOrderListActionType.FETCH_USER_ORDER_LIST_SUCCESS:
      return { data: action.payload, error: null, loading: false };
    case UserOrderListActionType.FETCH_USER_ORDER_LIST_FAILURE:
      return { data: null, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default fetchUserOrderListReducer;
