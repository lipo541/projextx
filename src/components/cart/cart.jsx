import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../../context/cartcontext';
import './cart.css';
import leftarrow from '../../assets/logo/leftarrow.png';
import lock from '../../assets/logo/lock.png';
import message from '../../assets/logo/chat.png';
import truck from '../../assets/logo/truck.png';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cardProducts, setCardProducts] = useState([]);
  const { totalPrice, setTotalPrice } = useContext(CartContext);

  const increaseCount = (id, price) => {
    setCardProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, count: product.count + 1 }
          : product
      )
    );
    setTotalPrice((prevPrice) => prevPrice + price);
  };

  const decreaseCount = (id, price) => {
    setCardProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          const newCount = Math.max(1, product.count - 1); // Ensure count doesn't go below 1
          return { ...product, count: newCount };
        } else {
          return product;
        }
      })
    );
    // Recalculate the total price based on the updated counts
    const newTotalPrice = cardProducts.reduce((total, product) => total + product.price * product.count, 0);
    setTotalPrice(newTotalPrice);
  };

  const removeAllItems = () => {
    // Create an array of promises to remove each item
    const removePromises = cardProducts.map((product) => {
      return axios.delete(`https://digitalamazon.azurewebsites.net/api/cart/removefromcart`, {
        data: {
          productId: product.id,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('myData'))}`,
        },
      });
    });

    // Use Promise.all to wait for all removals to complete
    Promise.all(removePromises)
      .then((responses) => {
        // All items are removed, so set cardProducts to an empty array
        setCardProducts([]);
        // Set the total price to 0
        setTotalPrice(0);
      })
      .catch((error) => {
        console.error('API request error:', error);
      });
  };

  useEffect(() => {
    axios
      .get('https://digitalamazon.azurewebsites.net/api/cart/getmycartproducts', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('myData'))}`,
        },
      })
      .then((response) => {
        const products = response.data.map((product) => ({
          ...product,
          count: 1, // Set a default count value of 1 for each product
        }));
        const initialTotalPrice = products.reduce(
          (total, product) => total + product.price * product.count,
          0
        );
        setCardProducts(products);
        setTotalPrice(initialTotalPrice);
      })
      .catch((error) => {
        console.error('API request error:', error);
      });
  }, [setTotalPrice]);

  const removeItem = (id, price, count) => {
    // Calculate the amount to subtract from the total price
    const amountToSubtract = price * count;

    axios
      .delete(`https://digitalamazon.azurewebsites.net/api/cart/removefromcart`, {
        data: {
          productId: id,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('myData'))}`,
        },
      })
      .then((response) => {
        setCardProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
        // Subtract the amount from the total price
        setTotalPrice((prevPrice) => prevPrice - amountToSubtract);
      })
      .catch((error) => {
        console.error('API request error:', error);
      });
  };

  return (
    <div className="cart_container">
      <h1>My Cart ({cardProducts.length})</h1>
      <div className="cart_product_container">
        {cardProducts.map((cardProduct) => (
          <div className="cart_product_box" key={cardProduct.id}>
            <div>
              <img className="cart_product_box_image_api" src={cardProduct.images} alt="" />
            </div>
            <div className="cart_product_box2">
              <div>
                <span>{cardProduct.brand}</span>
              </div>
              <div>
                <span>
                  Size: medium, Color: blue, Material: Plastic Seller: Artel Market
                </span>
              </div>
              <div className="cart_button_container">
                <button onClick={() => removeItem(cardProduct.id, cardProduct.price, cardProduct.count)}>
                  Remove
                </button>
                <button>Save for Later</button>
              </div>
            </div>
            <div className="quant_container">
              <span>${(cardProduct.price * cardProduct.count).toFixed(2)}</span>
              <div className="quantity">
                <button onClick={() => decreaseCount(cardProduct.id, cardProduct.price)}>-</button>
                <span>{cardProduct.count}</span>
                <button onClick={() => increaseCount(cardProduct.id, cardProduct.price)}>+</button>
              </div>
            </div>
          </div>
        ))}
        <div className="cart_prise">
        <Link className="custom-link" to={"/"} style={{ textDecoration: 'none' }}>
          <button className="link-button">
            <img src={leftarrow} alt="" /> Back to shop
          </button>
        </Link>
          <button onClick={removeAllItems}>Remove All</button>
        </div>
        <div className='totalprise_span'>{totalPrice}</div>
        <div className="delivery_container">
          <div className="delivery_1">
            <div className="lock_container">
              <img src={message} alt="" />
            </div>
            <div className="delivery_2">
              <span className="delivery_span1">Customer Support</span>
              <span className="delivery_span2">
                Have you ever finally just
              </span>
            </div>
          </div>
          <div className="delivery_1">
            <div className="lock_container">
              <img src={lock} alt="" />
            </div>
            <div className="delivery_2">
              <span className="delivery_span1">Customer Support</span>
              <span className="delivery_span2">
                Have you ever finally just
              </span>
            </div>
          </div>
          <div className="delivery_1">
            <div className="lock_container">
              <img src={truck} alt="" />
            </div>
            <div className="delivery_2">
              <span className="delivery_span1">Customer Support</span>
              <span className="delivery_span2">
                Have you ever finally just
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
