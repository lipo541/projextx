import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import './listview.css'
import grid from '../../assets/logo/grid.png';
import circle from '../../assets/logo/circle.png';
import list from '../../assets/logo/list.png';
import favorites from '../../assets/logo/favorite2.png';
import arrowdown from '../../assets/logo/arrowdown.png';
import star4 from '../../assets/rating/4star.png';


import './listview.css'

const Listview = () => {
    const [products, setProducts] = useState([]);

    // const [selectedProductId, setSelectedProductId] = useState(null);
  
    useEffect(() => {
      axios
        .get('https://amazon-digital-prod.azurewebsites.net/api/product/products')
        .then((response) => {
          setProducts(response.data ) ; // Assuming the response contains an array of products
          
        })
        .catch((error) => {
          console.error('API request error:', error);
        });
  
    }, []);
  return (
    <div className='nav_container'>
        <div className='nav_1'>
            <span>12,911 items in<b> Mobile accessory</b> </span>
            <div className='grid_list'>
                <input type="checkbox" name="checkbox" id="" />
                <span>Verified only</span>
                <span>Featured</span>
                <img src={arrowdown} alt="" />
                <img className='grid' src={grid} alt="" />
                <img className='list' src={list} alt="" />
            </div>
        </div>

        <div className='nav_box_container'>
        {/* Product Cards */} 
        {products.map((product) => {
            return (
                <div className='nav_2'>
                    <div className='product_img1'>
                        <img src={product.images} alt="" />
                    </div>
                    <div className='prise_description'>
                        <span className='span1'>{product.model}</span>
                        <div className='span_box'>
                            <span className='new_prise'>$ {product.price}</span>
                            <span className='old_prise'> <del>$ {product.oldPrice}</del></span>
                        </div>
                        <div className='rating_box'>
                            <div className='rating_star'>
                                <img src={star4} alt="" />
                                <span>7.5</span>
                            </div>
                            <div className='order_info'>
                                <img src={circle} alt="" />
                                <span className='order_span'>{product.brand}</span>
                                <img src={circle} alt="" />
                                <span className='free_span'>Free Shipping</span>
                            </div>
                        </div>
                        <div className='spans_cont'>
                            <span className='lorem'>{product.name}</span>
                            <span className='view_detail'>View details</span>
                        </div>
                    </div>

                    
                    <div className='favorite'>
                        <img src={favorites} alt="" />
                    </div>
                </div>
        
            )

            })}
            
        </div>
    </div>
  )
}
export default Listview