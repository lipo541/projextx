import React, { useState,  } from 'react';
import './productfilter.css';
import arrowdown from '../../assets/logo/arrowdown.png';
import PriceRangeSlider from '../prise_range/prise';
import star5 from '../../assets/rating/5star.png';
import star4 from '../../assets/rating/4star.png';
import star3 from '../../assets/rating/3star.png';
import star2 from '../../assets/rating/2star.png';


const Productfilter = () => {
  const [isCategoryOpen, setCategoryOpen] = useState(true);
  const [isBrandsOpen, setBrandsOpen] = useState(true);
  const [isFeaturesOpen, setFeaturesOpen] = useState(true);
  const [isPriceRangeOpen, setPriceRangeOpen] = useState(true);
  const [isConditionOpen, setConditionOpen] = useState(true);
  const [isRatingOpen, setRatingOpen] = useState(true);

  const toggleCategory = () => {
    setCategoryOpen(!isCategoryOpen);
  };

  const toggleBrands = () => {
    setBrandsOpen(!isBrandsOpen);
  };

  const toggleFeatures = () => {
    setFeaturesOpen(!isFeaturesOpen);
  };

  const togglePriceRange = () => {
    setPriceRangeOpen(!isPriceRangeOpen);
  };

  const toggleCondition = () => {
    setConditionOpen(!isConditionOpen);
  };

  const toggleRating = () => {
    setRatingOpen(!isRatingOpen);
  };

  return (
    <div className='navigation_container'>
        <div className='filter_container'>
            {/* Category Filter */}
            <div className={`filter_box ${isCategoryOpen ? 'open' : ''}`}>
                <div className='nav_head' onClick={toggleCategory}>
                    <span>Category</span>
                    <img src={arrowdown} alt="" className={isCategoryOpen ? 'rotate' : ''} />
                </div>
                <ul style={{ display: isCategoryOpen ? 'block' : 'none' }}>
                    <li>Mobile accessory</li>
                    <li>Electronics</li>
                    <li>Smartphones</li>
                    <li>Modern tech</li>
                </ul>
                {isCategoryOpen && <span className='seeall'>See all</span>}
            </div>

            {/* Brands Filter */}
            <div className={`filter_box ${isBrandsOpen ? 'open' : ''}`}>
                <div className='nav_head' onClick={toggleBrands}>
                    <span>Brands</span>
                    <img src={arrowdown} alt="" className={isBrandsOpen ? 'rotate' : ''} />
                </div>
                <ul style={{ display: isBrandsOpen ? 'block' : 'none' }}>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Samsung
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Apple
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Huawei
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Pocco
                        </label>
                    </li>
                </ul>
                {isBrandsOpen && <span className='seeall'>See all</span>}
            </div>

            {/* Features Filter */}
            <div className={`filter_box ${isFeaturesOpen ? 'open' : ''}`}>
                <div className='nav_head' onClick={toggleFeatures}>
                    <span>Features</span>
                    <img src={arrowdown} alt="" className={isFeaturesOpen ? 'rotate' : ''} />
                </div>
                <ul style={{ display: isFeaturesOpen ? 'block' : 'none' }}>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Metallic
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Plastic cover
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />8GB Ram
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Super power
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Large Memory
                        </label>
                    </li>
                </ul>
                {isFeaturesOpen && <span className='seeall'>See all</span>}
            </div>

            {/* Price Range Filter */}
            <div className={`filter_box ${isPriceRangeOpen ? 'open' : ''}`}>
                <div className='nav_head' onClick={togglePriceRange}>
                    <span>Price range</span>
                    <img src={arrowdown} alt="" className={isPriceRangeOpen ? 'rotate' : ''} />
                </div>
                <div className='priserange_filter' style={{ display: isPriceRangeOpen ? 'block' : 'none' }}>
                    <PriceRangeSlider />
                </div>
                {isPriceRangeOpen && <span>See all</span>}
            </div>

            {/* Condition Filter */}
            <div className={`filter_box ${isConditionOpen ? 'open' : ''}`}>
                <div className='nav_head' onClick={toggleCondition}>
                    <span>Condition</span>
                    <img src={arrowdown} alt="" className={isConditionOpen ? 'rotate' : ''} />
                </div>
                <ul style={{ display: isConditionOpen ? 'block' : 'none' }}>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Metallic
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Plastic cover
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />8GB Ram
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Super power
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Large Memory
                        </label>
                    </li>
                </ul>
                {isConditionOpen && <span className='seeall'>See all</span>}
            </div>

            {/* Rating Filter */}
            <div className={`filter_box ${isRatingOpen ? 'open' : ''}`}>
                <div className='nav_head' onClick={toggleRating}>
                    <span>Rating</span>
                    <img src={arrowdown} alt="" className={isRatingOpen ? 'rotate' : ''} />
                </div>
                <ul style={{ display: isRatingOpen ? 'block' : 'none' }}>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <img src={star5} alt="" />
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <img src={star4} alt="" />
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <img src={star3} alt="" />
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <img src={star2} alt="" />
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Productfilter;
