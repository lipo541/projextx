import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './layout.css'
import Main from '../components/header/main/main';
import Footer from '../components/footer/footer';
import Routs from '../routs';
import Chatbot from '../components/singlepages/chat';

const Layout = () => {
  
  const location = useLocation();
  const hideMainAndFooter = location.pathname === '/authorization' || location.pathname === '/registration' || location.pathname === '*';
  const chatBot = location.pathname === '/authorization' || location.pathname === '/registration' ;
  useEffect(()=>{     
    window.scrollTo(0, 0);   
  },[location.pathname])


  return (
    <div className='layout_container'>
      {!hideMainAndFooter && <Main />}
      
      <Routs />
      {!chatBot && <div className='chatbot_container sticky_chatbot'>

        <Chatbot/>
        
      </div> }
      
      {!hideMainAndFooter && <Footer />}
    </div>
  );
}

export default Layout;
