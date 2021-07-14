import React from 'react';

const Cardcomponent = (props) => {
 
 const {product,AddtoCart} =props;
 console.log(product)

    return (
        
        <div  class="flex flex-col h-min w-56 p-1 border-box bg-white rounded xl  mx-4 container max-width: 768px shadow-lg ... text-justify font-mono">
        <div class="flex rounded flex-col w-ful w-full h-48 bg-gray-200">
        <img class="w-full bg-cover" src={product.picture}/>
        </div>
        <div class="flex border-box p-1 flex-col">
            <p class="text-sm text-gray-500">{product.category}</p>
            <p>{product.name}</p>
            <p>Tk {product.price}<span class="text-sm">00</span></p>
            <div className="grid grid-cols-2 gap-4">
            <a class="text-center text-sm bg-blue-500 rounded py-2 text-white mt-2" href="">View Item</a>
            <button onClick={AddtoCart} class="text-center text-sm bg-red-500 rounded text-white mx-2">+</button>
            </div>
        </div>
    </div>


    );
};

export default Cardcomponent;