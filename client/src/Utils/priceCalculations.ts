import { cartStateProduct } from "../Types";

interface prices {
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
}

/**
 *
 * @param cartItems
 * @returns prices
 * @description retruns computed value of price details from ordered items
 */

const calculatePrice = (cartItems: cartStateProduct[] | null): prices => {
  if (cartItems === null || cartItems.length === 0)
    return { itemsPrice: 0, shippingPrice: 0, taxPrice: 0, totalPrice: 0 };

  const itemsPrice = Number(
    cartItems
      .reduce(
        (accumulator, item) => accumulator + Number(item.price * item.quantity),
        0
      )
      .toFixed(2)
  );

  const shippingPrice = Number(
    itemsPrice > 2000 ? 0 : ((itemsPrice * 2) / 100).toFixed(2)
  );
  const taxPrice = Number((0.15 * itemsPrice).toFixed(2));
  const totalPrice = Number((itemsPrice + taxPrice + shippingPrice).toFixed(2));

  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};

export default calculatePrice;
