import React from 'react'
import './productlist.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Productlist = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios
      .get('https://amazon-digital-prod.azurewebsites.net/api/product/categories')
      .then((response) => {
        setOffers(response.data);
      })
      .catch((error) => {
        console.error('API request error:', error);
      });
      
  }, []);

  return (
    <div className='productlist_container'>
      <Link to={'/filter'}>
        
      </Link>
      <ul>
        {offers.map((offer) => {
          
          return (
            <Link to={'/filter'} style={{ textDecoration: 'none' }}> 
              <li key={offer.id}>{offer.name}</li>
            </Link>
            
          );
          
        })}

      </ul>
    </div>
  );
};

export default Productlist;
