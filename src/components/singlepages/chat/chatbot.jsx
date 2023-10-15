import React, { useState } from 'react';
import './chatbot.css';
import livechat from '../../../assets/logo/livechat.png';
import operator from '../../../assets/logo/operator.png';

const Chatbot = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [inputText, setInputText] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const toggleSlider = () => {
    setShowSlider(!showSlider);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendClick = () => {
    if (inputText.trim() !== '') {
      setChatMessages([...chatMessages, { user: true, text: inputText }]);

      setInputText('');
    }
  };

  return (
    <div className='chatbot_container1'>
      <div className='livechat_container' onClick={toggleSlider}>
        <img src={livechat} alt="" />
      </div>
      <div className={`slider ${showSlider ? 'show' : ''}`}>
        <div className='livechat_box'>
          <div className='operator'>
            <div className='operatoor_box'>
              <img src={operator} alt="" />
            </div>
            <div className='operator_span_box'>
              <span className='operator_span'>mr.adam</span>
              <span className='waiting_span'>waiting your turn...</span>
            </div>
          </div>
          <div className='chat-content'>
            {chatMessages.map((message, index) => (
              <div className='chat_span1' key={index}>
                {message.user ? 'you: ' : 'operator: '}
                <span>{message.text}</span>
              </div>
            ))}
          </div>
          <div className='input-container'>
            <input
              type='text'
              placeholder='Type your message...'
              value={inputText}
              onChange={handleInputChange}
            />
            <button onClick={handleSendClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
