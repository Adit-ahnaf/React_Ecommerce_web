import React, { useContext, useState } from 'react';
import Cardcomponent from './Cardcomponent';
import {itemcontext} from './Contex';
import data from './Items'
const ProductsMap = () => {
    const {item} =data; 
    const {AddtoCart} = useContext(itemcontext)    
    console.log(item)
    
    return (
        <div class="grid grid-cols-4 gap-2">
        
             {item.map((product) => (
                
          <Cardcomponent  product={product} AddtoCart={AddtoCart} ></Cardcomponent>
        ))}
        </div>
        
      
    );
};

export default ProductsMap;