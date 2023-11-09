import React, { useState } from 'react';
import './signup.css';
import google from '../../assets/logo/google.png';
import facebook from '../../assets/logo/facebook.png';
import apple from '../../assets/logo/apple.png';
import brandlogo from '../../assets/logo/atom.png'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault();
    axios.post('https://digitalinstitute-amazon.azurewebsites.net/api/user/registerUser',
      {
        userName,
        password,
        email,
      },
      {headers: {'Content-Type': 'application/json'}}
    )
    .then((response) => {
      console.log(response);
      alert('Registration completed successfully');
    })
    .catch((error) => {
      console.error('API request error:', error);
    });
  }

  return (
    <div className='login_ecomerce'>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form onSubmit={(e) => (handleRegister(e))}>
        <h1>Sign Up <Link to={'/'}><img src={brandlogo} alt="logo" /></Link> </h1>
        <div className='label_inp_box'>
          <label htmlFor="fullname">User name</label>
          <input value={userName} onChange={(e) => {setUserName(e.target.value)}} type="text" placeholder="Full Name" id="fullname" />
        </div>
        <div className='label_inp_box'>
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => {setEmail(e.target.value)} } type="email" placeholder="Email" id="email" />
        </div>
        <div className='label_inp_box'>
          <label htmlFor="password">Password</label>
          <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password" id="password" />
        </div>

        <div>
          <button type='submit'>Sign Up</button>
          <div className='singn_logo_box'>
            <div className='contactwith_span'>
              <span>or continue with</span>
            </div>

            <div className='g_f_a_span'>
              <div className='google_box'>
                <img className='logo_image' src={google} alt='' />
              </div>

              <div className='google_box'>
                <img className='logo_image' src={facebook} alt='' />
              </div>

              <div className='google_box'>
                <img className='logo_image' src={apple} alt='' />
              </div>

            </div>
            <span className='navigate_login_span'> <Link to={'/authorization'}>log in now</Link> </span>

          </div>

        </div>

      </form>
    </div>
  );
};

export default Signup;
