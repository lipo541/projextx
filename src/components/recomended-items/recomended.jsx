import React from 'react'
import './recomended.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Recomended = () => {
  const [recomended, setRecomended] = useState([]);


  useEffect(() => {
    axios
      .get('https://amazon-digital-prod.azurewebsites.net/api/product/products')
      .then((response) => {
        setRecomended(response.data ) ; 
        
      })
      .catch((error) => {
        console.error('API request error:', error);
      });

  }, []);
  return (
    <div className='recomended_container'>
        <span>Recommended items</span>
        <div className='recomended_container2'>

          {recomended.map((product) => {
          return (

              <div className='items_box'>
                  <div className='recomended_cont_img'>
                    <img src={product.images} alt="" />
                  </div>
                  <div className='span_recomended_box'>
                    <span className='recomended-prise'>$ {product.price}</span>
                    <span className='recomended-product-span'>{product.brand}</span>
                  </div>
              </div>


            )

          })}
        </div>

    </div>
  )
}

export default Recomended