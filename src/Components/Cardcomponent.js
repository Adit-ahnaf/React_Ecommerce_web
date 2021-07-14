import React from "react";
import ProductsMap from "./ProductsMap";
const Cardcomponent = (props) => {
  const { products } = props;
  console.log(products);
  return (
    <div class="flex flex-col h-min w-56 p-1 border-box bg-white rounded xl p-2 mx-8 container max-width: 768px shadow-lg ... text-justify font-mono">
      <div class="flex rounded flex-col w-ful w-full h-48 bg-gray-200">
        <img class="w-full bg-cover" src={products.picture} />
      </div>
      <div class="flex border-box p-1 flex-col">
        <p class="text-sm text-gray-500">{products.category}</p>
        <p>{products.name}</p>
        <p>
          Tk {products.price}
          <span class="text-sm">00</span>
        </p>
        <div className="grid grid-cols-2 gap-4">
          <a
            class="text-center text-sm bg-blue-500 rounded py-2 text-white mt-2"
            href=""
          >
            View Item
          </a>
          <button class="text-center text-sm bg-red-500 rounded text-white mx-2">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardcomponent;
