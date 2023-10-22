import React, { useState } from 'react';
import './addcart.css';
import Cart from '../../components/cart/cart';
import Checkout from '../../components/checkout/checkout';
import Save from '../../components/save/save';
import { CartContext } from '../../context/cartcontext'; // replace with the actual path to CartContext.js in your project

const Addcart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  

  return (
    <CartContext.Provider value={{ totalPrice, setTotalPrice }}>
      <div className='addcart_container'>
        <Cart />
        <Checkout />
      </div>
      <div>
        <Save />
      </div>
    </CartContext.Provider>
  );
};

export default Addcart;
