import React from 'react'
import './register.css'
import avatarlogo from '../../../assets/pictures/man.png'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const token = localStorage.getItem('myData');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('myData');
    navigate('/'); // Redirect to home page
  }

  return (
    <div className='register_container'>
      <div className='register'>
        <div className='avatar'>
          <img src={avatarlogo} alt="avatar" />
          <span>Hi, user <br/> let's get stated</span>
        </div>
        <div className='registration_buttons'>
          {token ? (
            <button className='join_button1' onClick={handleLogout}>Log out</button>
          ) : (
            <>
              <Link to={'./registration'}>
                <button className='join_button'>Join now</button>
              </Link>
              <Link to={'./authorization'}>
                <button className='login_button'>Log in</button>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className='color_box'>
        <div className='yellow'><span>Get US $10 off with a new supplier</span></div>
        <div className='skygreen'><span>Send quotes with supplier preferences</span></div>
      </div>
    </div>
  )
}

export default Register
