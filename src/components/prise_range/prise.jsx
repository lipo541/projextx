import React, { useState } from 'react';
import './prise.css'

function PriceRangeSlider() {
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(2000);

  const handleMinChange = (event) => {
    setMinValue(Math.min(Number(event.target.value), maxValue));
  };

  const handleMaxChange = (event) => {
    setMaxValue(Math.max(Number(event.target.value), minValue));
  };

  const handleApplyClick = () => {
    console.log('Price range applied: Min', minValue, 'Max', maxValue);
  };

  return (
    <div className='priserange1'>
      <div className='priserange_box'>
        <input 
          type="range"
          min="0"
          max="2000"
          value={minValue}
          onChange={handleMinChange}
        />
        <input 
          type="range"
          min="0"
          max="2000"
          value={maxValue}
          onChange={handleMaxChange}
        />
      </div>

      <div className='priserange_box2'>
        <div className='priserange_input_box'>
          <label>Min: </label>
          <input
            type="number"
            min="0"
            max="10000"
            value={minValue}
            onChange={handleMinChange}
          />
        </div>
        <div className='priserange_input_box'>
          <label>Max: </label>
          <input
            type="number"
            min="0"
            max="10000"
            value={maxValue}
            onChange={handleMaxChange}
          />
        </div>
      </div>
      
      <div className='apply_prise'>
       <button onClick={handleApplyClick}>Apply</button>
      </div>
      
    </div>
  );
}

export default PriceRangeSlider;
