import React, { useState,  } from 'react';
import './signup.css';
import google from '../../assets/logo/google.png';
// import facebook from '../../assets/logo/facebook.png';
import apple from '../../assets/logo/apple.png';
import brandlogo from '../../assets/logo/atom.png'
import axios from 'axios';

const Signup = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')




    const handleRegister = async (e) => {
      e.preventDefault();
      // try{
      // const response = await fetch('https://amazon-digital-prod.azurewebsites.net/api/user/registerUser',
      // {method: 'POST',
      // headers: {'Contetnt-Type': 'application/json'},
      // body: JSON.stringify({
      //   userName,
      //   password,
      //   email,
      // })
      // }
      // )}catch(error){
      //   throw error}
        axios.post('https://amazon-digital-prod.azurewebsites.net/api/user/registerUser',
          {
            userName,
            password,
            email,
          },
          {headers: {'Content-Type': 'application/json'}}
          )
          .then((response) => {
            console.log(response)
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
        <h1>Sign Up <img src={brandlogo} alt="logo" /></h1>
        <label htmlFor="fullname">User name</label>
        <input value={userName} onChange={(e) => {setUserName(e.target.value)}} type="text" placeholder="Full Name" id="fullname" />

        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => {setEmail(e.target.value)} } type="email" placeholder="Email" id="email" />

        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password" id="password" />

        <label htmlFor="confirmPassword">Repeat Password</label>
        <input value={repassword} onChange={(e) => {setRepassword(e.target.value)}} type="password" placeholder="Confirm Password" id="confirmPassword" />

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
                {/* <img className='logo_image' src={facebook} alt='' /> */}
              </div>

              <div className='google_box'>
                <img className='logo_image' src={apple} alt='' />
              </div>

            </div>

          </div>

        </div>

      </form>
    </div>
  );
};

export default Signup;
