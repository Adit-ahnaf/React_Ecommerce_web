import React, { useState } from 'react';

const CartItems = (props) => {

    const { CartItems, AddtoCart} = props;
    console.log(CartItems);
    
    return (
     <div>
        
         {
           CartItems.map((item)=>{
              <div>
                  {CartItems.name}
              </div>
           })
       
          }
     </div>
    
    );
};

export default CartItems;