import React, { useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import useAction from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface matchId {
  id: string;
}

interface Props extends RouteComponentProps<matchId> {}

const CartScreen: React.FC<Props> = ({ match, location, history }) => {
  const productId = match.params.id;
  const quantity = parseInt(
    location.search ? location.search.split("=")[1] : "1"
  );

  const { addProductToCart } = useAction();
  const { cartItems } = useTypedSelector((state) => state.Cart);

  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      addProductToCart(productId, quantity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId, quantity]);

  return (
    <>
      <div>CART SCREEN</div>
    </>
  );
};

export default CartScreen;
