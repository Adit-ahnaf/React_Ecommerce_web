import React, { useContext, useState} from 'react';
import {itemcontext} from './Contex'
const CartItems = () => {
    
    const {cartItems, AddtoCart, onRemove } = useContext(itemcontext);

    console.log(cartItems)
   
    
    return (
      <div>
       
      </div>  
    );
  }
    

export default CartItems;