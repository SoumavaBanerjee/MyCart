import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

interface matchId {
  id: string;
}

interface Props extends RouteComponentProps<matchId> {}

const CartScreen: React.FC<Props> = ({ match, location, history }) => {
  const productId = match.params.id;
  const quantity = location.search;

  console.log(quantity);

  return (
    <>
      <div>CART SCREEN</div>
    </>
  );
};

export default CartScreen;
