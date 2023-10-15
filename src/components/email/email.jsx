import React, { useRef } from 'react';
import './email.css';
import email from '../../assets/logo/email.png';

const Email = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    const inputElement = inputRef.current;
    inputElement.focus();
    inputElement.select();
  };

  return (
    <div className='email_container'>
      <span>Subscribe to our newsletter</span>
      <p>Get daily news on upcoming offers from many suppliers all over the world</p>
      <div className='email_box'>
        <img
          src={email}
          alt="Email Icon"
          className="logo"
          onClick={focusInput}
        />
        <input
          type="email"
          placeholder='Email'
          ref={inputRef}
        />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Email;
