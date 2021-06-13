export type shippingAddress = {
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

export type paymentMethod = {
  method: "paypal" | "stripe";
};
