import React, { useState } from 'react';
import './aboutus.css';


const Aboutus = ({productDetal}) => {
  const [activeSpan, setActiveSpan] = useState('Description');
  const [displayedSpan, setDisplayedSpan] = useState('span_description');

  const handleSpanClick = (spanName, spanClassName) => {
    setActiveSpan(spanName);
    setDisplayedSpan(spanClassName);
  };

  return (
    <>
      
      <div className='product_detal_container'>
        <div className='product_detal_container2'>
          <div className='detail_span_box'>
            <span
              onClick={() => handleSpanClick('Description', 'span_description')}
              className={activeSpan === 'Description' ? 'active' : ''}
            >
              Description
            </span>
            <span
              onClick={() => handleSpanClick('Reviews', 'span_description2')}
              className={activeSpan === 'Reviews' ? 'active' : ''}
            >
              Reviews
            </span>
            <span
              onClick={() => handleSpanClick('Shipping', 'span_description3')}
              className={activeSpan === 'Shipping' ? 'active' : ''}
            >
              Shipping
            </span>
            <span
              onClick={() => handleSpanClick('About company', 'span_description4')}
              className={activeSpan === 'About company' ? 'active' : ''}
            >
              About us
            </span>
          </div>
        </div>
        <div className='product_detal_container3'>
          {/* Use conditional rendering to display only the selected span */}
          <span className={`span_description ${displayedSpan === 'span_description' ? 'active' : 'hidden'}`}>
            {productDetal.description}
           </span>
          <span className={`span_description2 ${displayedSpan === 'span_description2' ? 'active' : 'hidden'}`}>
            Looking for a powerful laptop that is also versatile? The ASUS VivoBook F510UA is the perfect choice! With a configuration that starts at an ultra-affordable $800, this laptop offers value and performance you won’t find at other similarly priced machines. You’ll find a great starting point for your business with a battery life of 8 hours and up to 7x faster loading speeds compared to Atom processors. Higher graphics capabilities and configurations are available as well, so you can power through projects or enjoy immersive gaming experiences on the go. Plus, ASUS comes with 4 years of worry-free warranty coverage.
          </span>
          <span className={`span_description3 ${displayedSpan === 'span_description3' ? 'active' : 'hidden'}`}>
            "Streamline your deliveries with our efficient shipping service. Reliable, fast, and affordable shipping options for your e-commerce business. Enhance customer satisfaction today!"          </span>
          <span className={`span_description4 ${displayedSpan === 'span_description4' ? 'active' : 'hidden'}`}>
           "Your trusted e-commerce partner. Quality products, exceptional service. Shop confidently with us today."          </span>
        </div>
      </div>

      
    </>
  );
};

export default Aboutus;
