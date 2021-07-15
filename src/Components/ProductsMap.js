import React, { useContext, useState } from "react";
import Cardcomponent from "./Cardcomponent";

const ProductsMap = (props) => {
  const { items, AddtoCart } = props;
  return (
    <div class="grid grid-cols-4 gap-2">
      {items.map((product) => (
        <Cardcomponent product={product} AddtoCart={AddtoCart}></Cardcomponent>
      ))}
    </div>
  );
};

export default ProductsMap;
