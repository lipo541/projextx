import React from 'react'
import './sale.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Sale = () => {
  const [offers, setOffers] = useState([]);

  // const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    axios
      .get('https://digitalinstitute-amazon.azurewebsites.net/api/product/offers')
      .then((response) => {
        setOffers(response.data ) ;
        
      })
      .catch((error) => {
        console.error('API request error:', error);
      });

  }, []);

  return (
    <div className='sale_container2'>
      
      {offers.map((offer) => {
        return (
          
          <div className='sale_box' key={offer.id}>
            <div className='sale_box_img_box'>
              <img src={offer.image} alt="" />
            </div>
            <div className='old_new_prise'>
              <span className='product_description'>{offer.oldPrice}$</span>        
              {/* <span className='product_description'>{offer.newPrise}</span>         */}
              <span className='sale_percent'> {offer.newPrice}$ </span>
            </div>
            
          </div>
        )
        
      })}
      

    </div>
  )
}

export default Sale