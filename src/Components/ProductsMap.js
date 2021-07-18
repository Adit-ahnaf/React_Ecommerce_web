import React, { useContext } from 'react';
import Cardcomponent from './Cardcomponent';
import { itemcontext } from './Contex';
import data from './Items'

const ProductsMap = () => {
    
    const {items} = data;
    const {AddtoCart} = useContext(itemcontext)

    console.log(items)
    return (
        <div class="grid grid-cols-4 gap-2">

            {items.map((product) => (

                <Cardcomponent product={product} AddtoCart={AddtoCart} ></Cardcomponent>
            ))}
        </div>


    );
};

export default ProductsMap;