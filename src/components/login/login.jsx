import React, { useState } from 'react';
import './login.css';
import google from '../../assets/logo/google.png';
import facebook1 from '../../assets/logo/facebook.png';
import apple from '../../assets/logo/apple.png';
import brandlogo from '../../assets/logo/atom.png'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    if (event.target.id === 'username') {
      setUsername(event.target.value);
    } else if (event.target.id === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://digitalinstitute-amazon.azurewebsites.net/api/User/LogIn',
    {
      email:username ,
      password,
    },
    {headers: {'Content-Type': 'application/json'}}
    )

    .then((response) => {
      localStorage.setItem('myData', JSON.stringify(response.data.jwt));
      navigate('/');
    })
    .catch((error) => {
      console.error('API request error:', error);
      alert('Email and password are incorrect');
    });
  };

  return (
    <div className='login_ecomerce'>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <h1>Log in <Link to={'/'}><img src={brandlogo} alt="" /></Link> </h1>
        <div className='label_inp_box'>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" value={username} onChange={handleInputChange} />
        </div>
        <div className='label_inp_box'>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" value={password} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">Log In</button>
          <div className='singn_logo_box'>
            <div className='contactwith_span'>
              <span>or continue with</span>
            </div>

            <div className='g_f_a_span'>
              <div className='google_box'>
                <img className='logo_image' src={google} alt='' />
              </div>

              <div className='google_box'>
                <img className='logo_image' src={facebook1} alt='' />
              </div>

              <div className='google_box'>
                <img className='logo_image' src={apple} alt='' />
              </div>

            </div>
            
            <span className='reg_span1'><Link to={'/registration'}>register now </Link> </span>

          </div>

        </div>


      </form>
    </div>
  );
};

export default Login;
