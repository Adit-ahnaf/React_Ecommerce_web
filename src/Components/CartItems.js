import React from "react";
import HOCCartItemStore from "./HOCCartItemStore";

const CartItems = (props) => {
  const { cartItems, AddtoCart, onRemove } = props;
  console.log(cartItems);
  return <div></div>;
};

export default HOCCartItemStore(CartItems);
