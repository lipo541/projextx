// Productlist.js
import './productlist.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../connection/categories'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Productlist = () => {
  const [searchParams, setSearchParams ] = useSearchParams()
  const params = Object.fromEntries([...searchParams]);
  const [selectedProductId, setSelectedProductId] = useState(null); // Add this line

  const dispatch = useDispatch ()
  const navigate = useNavigate()

  const {categories} = useSelector((state) => state.categories)
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const handleCategory = (id, category) => {
    setSearchParams ({
      ...params, 
      categoryId: id,
      categoryName: category,
    })
    setSelectedProductId(id); // Set selected product id
    navigate (`/filter?categoryId=${id}`)
  }
  
  return (
    <div className='productlist_container'>
      <ul>
        {categories.map((product) => {
          return<li onClick={() => handleCategory(product.id, product.name)} key={product.id}>{product.name}</li>
        })}
      </ul>
    </div>
  );
};

export default Productlist;
