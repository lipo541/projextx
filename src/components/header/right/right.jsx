import React from 'react'
import './right.css'
import profile from '../../../assets/logo/user.png'
import message from '../../../assets/logo/comment.png'
import order from '../../../assets/logo/favorite.png'
import mycart from '../../../assets/logo/cart2.png'
import { Link, useNavigate } from 'react-router-dom'
import logout from '../../../assets/logo/logout.png'

const Right = () => {
  const token = localStorage.getItem('myData');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('myData');
    navigate('/'); // Redirect to home page
  }

  const handleCartClick = () => {
    if (token) {
      navigate('./addcart');
    } else {
      alert('You have to log in first to add product in the cart.');
    }
  }

  return (
    <div className='right'>
        <div className='grupe'>
            {token ? (
              <>
                <img src={logout} alt="" onClick={handleLogout} />
                <span onClick={handleLogout}>logout</span>
              </>
            ) : (
              <Link className='authorization_span_image' to="/authorization"> 
                <img src={profile} alt="" />
                <span>profile</span>
              </Link>
            )}
        </div>
        <div className='grupe'>
            <img src={message} alt="" />
            <span>message</span>
        </div>
        <div className='grupe'>
            <img src={order} alt="" />
            <span>order</span>
        </div>
        <div className='grupe'>
          <img src={mycart} alt="" onClick={handleCartClick} />
          <span>myCart</span>
        </div>
    </div>
  )
}

export default Right
