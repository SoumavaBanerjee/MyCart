import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/";

const useAction = (): typeof actionCreators => {
  const dispatch = useDispatch();

  // memoize useEffect re renders! Nice trick I found here!
  return useMemo(() => {
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);
};

export default useAction;
