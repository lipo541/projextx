import React, { useEffect, useState } from 'react';
import './right.css';
import profile from '../../../assets/logo/user.png';
import message from '../../../assets/logo/comment.png';
import order from '../../../assets/logo/favorite.png';
import mycart from '../../../assets/logo/cart2.png';
import { Link, useNavigate } from 'react-router-dom';
import logout from '../../../assets/logo/logout.png';
import axios from 'axios';

const Right = () => {
  const token = localStorage.getItem('myData');
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  const fetchCartCount = () => {
    if (token) {
      axios
        .get('https://digitalamazon.azurewebsites.net/api/cart/getmycartproducts', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('myData'))}`,
          },
        })
        .then((response) => {
          const count = response.data.length;
          setCartCount(count);
        })
        .catch((error) => {
          console.error('API request error:', error);
        });
    }
  };

  useEffect(() => {
    fetchCartCount(); // Fetch initial cart count

    // Periodically fetch the cart count every 0.2 seconds
    const intervalId = setInterval(fetchCartCount, 200);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('myData');
    navigate('/');
  };

  const handleCartClick = () => {
    if (token) {
      navigate('./addcart');
    } else {
      alert('You have to log in first to add products to the cart.');
    }
  };

  return (
    <div className='right'>
      <div className='grupe'>
        {token ? (
          <>
            <img src={logout} alt="" onClick={handleLogout} />
            <span onClick={handleLogout}>Logout</span>
          </>
        ) : (
          <Link className='authorization_span_image' to="/authorization"> 
            <img src={profile} alt="" />
            <span>Profile</span>
          </Link>
        )}
      </div>
      <div className='grupe grupe2'>
        <img src={message} alt="" />
        <span>Message</span>
      </div>
      <div className='grupe grupe2'>
        <img src={order} alt="" />
        <span>Order</span>
      </div>
      <div className='grupe'>
        <img src={mycart} alt="" onClick={handleCartClick} />
        <span>Cart</span>
        {token && (
          <div className='interval'>{cartCount}</div>
        )}
      </div>
    </div>
  );
};

export default Right;
