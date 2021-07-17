import React from "react";
import data from "./Items";
import ProductsMap from "./ProductsMap";
import HOCCartItemStore from "./HOCCartItemStore";

// const { items } = data;

const Mainitem = ({ AddtoCart, items }) => {
  console.log(items)
  return (
    <div>
      <ProductsMap items={items} AddtoCart={AddtoCart} />
    </div>
  );
};

export default HOCCartItemStore(Mainitem);
