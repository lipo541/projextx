import React from 'react'
import './recomended.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Recomended = () => {
  const [recomended, setRecomended] = useState([]);


  useEffect(() => {
    axios
      .get('https://digitalamazon.azurewebsites.net/api/product/products')
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

              <Link to={`/productdetal/${product.id}`}  style={{ textDecoration: 'none' }} className='items_box'>
                  <div className='recomended_cont_img'>
                    <img src={product.images} alt="" />
                  </div>
                  <div className='span_recomended_box'>
                    <span className='recomended-prise'>$ {product.price}</span>
                    <span className='recomended-product-span'>{product.brand}</span>
                  </div>
              </Link>


            )

          })}
        </div>

    </div>
  )
}

export default Recomended