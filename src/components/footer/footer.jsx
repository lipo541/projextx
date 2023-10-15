import React, { useState } from 'react';
import './footer.css';
import brand from '../../assets/logo/logo-main.png';
import arrowdown from '../../assets/logo/arrowdown.png';
import arrowup from '../../assets/logo/arrowup.png';
import facebook from '../../assets/social/facebook.png';
import instagram from '../../assets/social/instagram.png';
import linkdin from '../../assets/social/linkdin.png';
import tweeter from '../../assets/social/tweeter.png';
import youtube from '../../assets/social/youtube.png';
import appstore from '../../assets/social/apstore.png';
import playstore from '../../assets/social/playstore.png';
import usa from '../../assets/flags/usa.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [menuState, setMenuState] = useState({
    aboutus: false,
    Partnership: false,
    Information: false,
    For_users: false,
  });

  const toggleSubmenu = (label) => {
    setMenuState((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  return (
    <>
      <div className='background1'>
        <div className='footer_container2'>
          <div className='balance'>
            <img src={brand} alt='' />
          </div>
          <div className='social_container'>
            <Link to={'https://www.facebook.com/'} target="_blank">
              <img src={facebook} alt='' />
            </Link>
            <Link to={'https://www.instagram.com/'} target="_blank">
              <img src={instagram} alt='' />
            </Link>
            <Link to={'https://www.linkedin.com/'} target="_blank">
              <img src={linkdin} alt='' />
            </Link>
            <Link to={'https://twitter.com/'} target="_blank">
              <img src={tweeter} alt='' />
            </Link>
            <Link to={'https://www.youtube.com/'} target="_blank">
              <img src={youtube} alt='' />
            </Link>
          
          </div>
        </div>
        <div className='footer_container'>
            <div className='about_box'>
                <div className='download'>
                <Link to={'https://www.apple.com/app-store/'} target="_blank">
                    <img src={appstore} alt='' />
                </Link>
                <Link to={'https://play.google.com/'} target="_blank">
                    <img src={playstore} alt='' />
                </Link>
                </div>
             </div>
          <div className='about_box'>
            <div className='balance' onClick={() => toggleSubmenu('aboutus')}>
              <span className='aboutus'>about</span>
              <img src={menuState.aboutus ? arrowup : arrowdown} alt='' />
            </div>
            {menuState.aboutus && (
              <>
                <span>about</span>
                <span>about</span>
                <span>about</span>
                <span>about</span>
              </>
            )}
          </div>
          <div className='about_box'>
            <div className='balance' onClick={() => toggleSubmenu('Partnership')}>
              <span className='Partnership'>Partnership</span>
              <img src={menuState.Partnership ? arrowup : arrowdown} alt='' />
            </div>
            {menuState.Partnership && (
              <>
                <span>about</span>
                <span>about</span>
                <span>about</span>
                <span>about</span>
              </>
            )}
          </div>
          <div className='about_box'>
            <div className='balance' onClick={() => toggleSubmenu('Information')}>
              <span className='Information'>Information</span>
              <img src={menuState.Information ? arrowup : arrowdown} alt='' />
            </div>
            {menuState.Information && (
              <>
                <span>about</span>
                <span>about</span>
                <span>about</span>
                <span>about</span>
              </>
            )}
          </div>
          <div className='about_box'>
            <div className='balance' onClick={() => toggleSubmenu('For_users')}>
              <span className='For_users'>For users</span>
              <img src={menuState.For_users ? arrowup : arrowdown} alt='' />
            </div>
            {menuState.For_users && (
              <>
                <span>about</span>
                <span>about</span>
                <span>about</span>
                <span>about</span>
              </>
            )}
          </div>
          
        </div>
      </div>
      <div className='footer_line'>
        <span>© 2023 Ecommerce.</span>
        <div className='change_language'>
          <img className='usa' src={usa} alt='' />
          <span>english</span>
          <img src={arrowup} alt='' />
        </div>
      </div>
    </>
  );
};

export default Footer;
