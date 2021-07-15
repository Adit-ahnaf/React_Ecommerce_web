import React, { useEffect, useState } from "react";
import data from "./Items";
import ProductsMap from "./ProductsMap";
import CartItems from "./CartItems";
const Mainitem = () => {
  const { items } = data;
  const itemformLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems), [cartItems]);
  });

  const [cartItems, setCartItems] = useState(itemformLocalStorage);
  const AddtoCart = (product) => {
    const exist = cartItems.find((value) => value.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((value) =>
          value.id === product.id ? { ...exist, qty: exist.qty + 1 } : value
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <ProductsMap items={items} AddtoCart={AddtoCart}></ProductsMap>
      <CartItems
        cartItems={cartItems}
        AddtoCart={AddtoCart}
        onRemove={onRemove}
      ></CartItems>
    </div>
  );
};

export default Mainitem;
