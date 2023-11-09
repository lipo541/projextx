import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './listview.css'
import grid from '../../assets/logo/grid.png';
import circle from '../../assets/logo/circle.png';
import list from '../../assets/logo/list.png';
import arrowdown from '../../assets/logo/arrowdown.png';
import star4 from '../../assets/rating/4star.png';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Listview = ({ selectedProductId }) => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams ] = useSearchParams()
  const params = Object.fromEntries([...searchParams]);

  useEffect(() => {
    axios
      .get(`https://digitalinstitute-amazon.azurewebsites.net/api/product/products?CategoryId=${params.categoryId? params.categoryId: "" }&PriceFrom=${params.priceFrom? params.priceFrom: ""}&PriceTo=${params.priceTo? params.priceTo: ""}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('API request error:', error);
      });
  }, [searchParams,params.categoryId, params.priceFrom, params.priceTo]);

  let data = products;
  if (params.searchKey) {
    data = products.filter((item)=> {
        return item.name.includes(params.searchKey)})
  }


  return (
    <div className='nav_container'>
        <div className='nav_1'>
            <span>{products.length} items in<b> {params.categoryName? params.categoryName: 'store'}</b> </span>
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
        {data.map((product) => {
            return (
                <div className='nav_2'>
                    <Link to={`/productdetal/${product.id}`}  style={{ textDecoration: 'none' }} className='product_img1'>
                        <img src={product.images} alt="" />
                    </Link>
                    <div className='prise_description'>
                    <Link to={`/productdetal/${product.id}`}  style={{ textDecoration: 'none' }}>
                        <span className='span1'>{product.model}</span>
                    </Link>

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
                </div>
        
            )

            })}
            
        </div>
    </div>
  )
}

export default Listview;
