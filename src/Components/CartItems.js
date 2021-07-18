import React, { useContext, useState} from 'react';
import {itemcontext} from './Contex'

const CartItems = () => {
    
    const {cartItems, AddtoCart, onRemove } = useContext(itemcontext);

    //console.log(cartItems)

    
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    
   
    
    return (
     
      <div class="p-10">
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
          <button onClick={()=>onRemove(item)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
  -
</button>{' '}
            <button onClick={()=>AddtoCart(item)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  +
</button>
          </div>

          <div className="col-2 text-right">
            {item.qty} x ${item.price}
          </div>
        </div>
      ))}

      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">${itemsPrice}</div>
          </div>
        

          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>${itemsPrice}</strong>
            </div>
          </div>
          <hr />
          <div className="row">
            <button onClick={() => alert('Implement Checkout!')}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
      
    );
  }
    

export default CartItems;