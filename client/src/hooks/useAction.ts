import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/";

const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};

export default useAction;
