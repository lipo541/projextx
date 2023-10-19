import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './productfilter.css';
import arrowdown from '../../assets/logo/arrowdown.png';
import PriceRangeSlider from '../prise_range/prise';
import star5 from '../../assets/rating/5star.png';
import star4 from '../../assets/rating/4star.png';
import star3 from '../../assets/rating/3star.png';
import star2 from '../../assets/rating/2star.png';

const Productfilter = () => {
  // Make category filter
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://amazon-digital-prod.azurewebsites.net/api/product/categories')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('API request error:', error);
      });
  }, []);

  // Make brand filter
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios
      .get('https://amazon-digital-prod.azurewebsites.net/api/product/products')
      .then((response) => {
        setBrands(response.data);
      })
      .catch((error) => {
        console.error('API request error:', error);
      });
  }, []);

  // State for toggle all filters
  const [isFilterOpen, setFilterOpen] = useState({
    category: true,
    brands: true,
    features: true,
    priceRange: true,
    condition: true,
    rating: true,
  });

  // Toggle function for all filters
  const toggleFilter = (filterName) => {
    setFilterOpen({ ...isFilterOpen, [filterName]: !isFilterOpen[filterName] });
  };

  return (
    <div className='navigation_container'>
      <div className='filter_container'>
        {/* Category Filter */}
        <div className={`filter_box ${isFilterOpen.category ? 'open' : ''}`}>
          <div className='nav_head' onClick={() => toggleFilter('category')}>
            <span>Category</span>
            <img src={arrowdown} alt='' className={isFilterOpen.category ? 'rotate' : ''} />
          </div>
          <ul style={{ display: isFilterOpen.category ? 'block' : 'none' }}>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
          {isFilterOpen.category && <span className='seeall'>See all</span>}
        </div>

        {/* Brands Filter */}
        <div className={`filter_box ${isFilterOpen.brands ? 'open' : ''}`}>
          <div className='nav_head' onClick={() => toggleFilter('brands')}>
            <span>Brands</span>
            <img src={arrowdown} alt='' className={isFilterOpen.brands ? 'rotate' : ''} />
          </div>
          <ul style={{ display: isFilterOpen.brands ? 'block' : 'none' }}>
            {brands.map((brand) => (
              <li key={brand.id}>{brand.model}</li>
            ))}
          </ul>
          {isFilterOpen.brands && <span className='seeall'>See all</span>}
        </div>

        {/* Features Filter */}
        <div className={`filter_box ${isFilterOpen.features ? 'open' : ''}`}>
          <div className='nav_head' onClick={() => toggleFilter('features')}>
            <span>Features</span>
            <img src={arrowdown} alt='' className={isFilterOpen.features ? 'rotate' : ''} />
          </div>
          <ul style={{ display: isFilterOpen.features ? 'block' : 'none' }}>
            <li>
              <label>
                <input type='checkbox' name='' id='' />iron
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' name='' id='' />titanium
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' name='' id='' />gold
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' name='' id='' />silver
              </label>
            </li>
          </ul>
          {isFilterOpen.features && <span className='seeall'>See all</span>}
        </div>

        {/* Price Range Filter */}
        <div className={`filter_box ${isFilterOpen.priceRange ? 'open' : ''}`}>
          <div className='nav_head' onClick={() => toggleFilter('priceRange')}>
            <span>Price range</span>
            <img src={arrowdown} alt='' className={isFilterOpen.priceRange ? 'rotate' : ''} />
          </div>
          <div className='priserange_filter' style={{ display: isFilterOpen.priceRange ? 'block' : 'none' }}>
            <PriceRangeSlider />
          </div>
        </div>

        {/* Condition Filter */}
        <div className={`filter_box ${isFilterOpen.condition ? 'open' : ''}`}>
          <div className='nav_head' onClick={() => toggleFilter('condition')}>
            <span>Condition</span>
            <img src={arrowdown} alt='' className={isFilterOpen.condition ? 'rotate' : ''} />
          </div>
          <ul style={{ display: isFilterOpen.condition ? 'block' : 'none' }}>
            <li>
              <label>
                <input type='checkbox' name='' id='' />new
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' name='' id='' />old
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' name='' id='' />secondary
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' name='' id='' />feature
              </label>
            </li>
          </ul>
          {isFilterOpen.condition && <span className='seeall'>See all</span>}
        </div>

        {/* Rating Filter */}
        <div className={`filter_box ${isFilterOpen.rating ? 'open' : ''}`}>
          <div className='nav_head' onClick={() => toggleFilter('rating')}>
            <span>Rating</span>
            <img src={arrowdown} alt='' className={isFilterOpen.rating ? 'rotate' : ''} />
          </div>
          <ul style={{ display: isFilterOpen.rating ? 'block' : 'none' }}>
            <li>
              <label>
                <input type='checkbox' name='' id='' />
                <img src={star5} alt='' />
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' name='' id='' />
                <img src={star4} alt='' />
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' name='' id='' />
                <img src={star3} alt='' />
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' name='' id='' />
                <img src={star2} alt='' />
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Productfilter;
