import React, { useContext } from 'react';
import './checkout.css';
import express from '../../assets/cards/express.png';
import visa1 from '../../assets/cards/visa1.png';
import visa from '../../assets/cards/visa.png';
import applepay from '../../assets/cards/applepay.png';
import paypall from '../../assets/cards/paypall.png';
import { CartContext } from '../../context/cartcontext'; // replace with the actual path to CartContext.js in your project

const Checkout = () => {
  const { totalPrice } = useContext(CartContext);

  return (
    <div className='checkout_container'>
        <div className='cupon_container'>
            <span>have a coupon? </span>
            <div className='cuppon_apply'>
                <input type="text" name="" id=""  placeholder='Add coupon'/>
                <button>Apply</button>
            </div>
        </div>

        <div className='total_container'>
            <div className='total'>
                <span className='subtotal_span'>Subtotal:</span>
                <span className='total_span1'>${totalPrice.toFixed(2)}</span>
            </div>
            <div className='total'>
                <span className='subtotal_span'>discount:</span>
                <span className='total_span2'>$- 60</span>
            </div>
            <div className='total'>
                <span className='subtotal_span'>tax:</span>
                <span className='total_span3'>+ $14.00</span>
            </div>
            <div className='total_2'>
                <span className='subtotal_span2'>Total:</span>
                <span className='total_span4'>$1357.97</span>
            </div>
            <button>checkout </button>
            <div className='card_container'>
                <img src={express} alt="" />
                <img src={visa1} alt="" />
                <img src={visa} alt="" />
                <img src={applepay} alt="" />
                <img src={paypall} alt="" />
            </div>
        </div>
    </div>
  );
};

export default Checkout;
