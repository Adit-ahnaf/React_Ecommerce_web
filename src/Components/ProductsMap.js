import React from 'react';
import data from './Items'
import Cardcomponent from './Cardcomponent';

const ProductsMap = () => {
    const {products} = data;
    return (
        <div>
        {
            products.map((products)=>{
                <Cardcomponent key={products.id} products={products}/>
            })
        }
        </div>
    );
};

export default ProductsMap;