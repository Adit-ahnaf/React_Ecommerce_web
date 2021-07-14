import React from 'react';
import data from './Items'
import ProductsMap from './ProductsMap';
import CartItems from './CartItems';
const Mainitem = () => {

    const {items} = data;
    console.log(items)

    const [cartItems, setCartItems] = useState([]);
    const AddtoCart = (product) => {
      const exist = cartItems.find((value) => value.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map((value) =>
            value.id === product.id ? { ...exist, qty: exist.qty + 1 } :value
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
    };


  
    return (
        <div>
            <ProductsMap items={items} AddtoCart={AddtoCart}></ProductsMap>
            <CartItems cartItems={cartItems} AddtoCart={AddtoCart}></CartItems>
        </div>
    );
};

export default Mainitem;