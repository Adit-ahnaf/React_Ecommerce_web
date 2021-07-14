import React from "react";
import data from "./Items";
import Cardcomponent from "./Cardcomponent";

const ProductsMap = () => {
  const { products } = data;
  //console.log(products)
  return (
    <div>
      {products.map((products) => {
        return <Cardcomponent products={products} />;
      })}
    </div>
  );
};

export default ProductsMap;
