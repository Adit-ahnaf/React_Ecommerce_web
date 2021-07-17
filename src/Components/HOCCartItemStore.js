import React, { useEffect, useState } from "react";
import data from "./Items";

const HOCCartItemStore = (WrapperComponent) => {
  const HOCCartItemStoreComponent = () => {
    const { items } = data;
    const itemformLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
    const [cartItems, setCartItems] = useState(() => itemformLocalStorage);
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cartItems), [cartItems]);
    });
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
      <WrapperComponent
        AddtoCart={AddtoCart}
        items={items}
        cartItems={cartItems}
      />
    );
  };
  return HOCCartItemStoreComponent;
};

export default HOCCartItemStore;
