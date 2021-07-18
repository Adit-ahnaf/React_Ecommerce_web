import React, { useEffect, createContext, useState } from 'react';
import ProductsMap from './ProductsMap';
import CartItems from './CartItems';
import data from './Items';

export const itemcontext = createContext();

export const Contex = props => {
   
  
 
  const itemformLocalStorage = JSON.parse(localStorage.getItem('cart') || "[]")

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems), [cartItems])
  });



  const [cartItems, setCartItems] = useState(() => itemformLocalStorage);
  console.log(cartItems)

  const AddtoCart = (product) => {
    const exist = cartItems.find((x)  => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
      alert("Added to the Cart!!");
    }
    
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  

  return (
    <div>

      <itemcontext.Provider value={{cartItems, AddtoCart, onRemove}}>
        {props.children}
      </itemcontext.Provider>
    </div>
  );
};

