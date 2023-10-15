import React from 'react'
import Productfilter from '../../components/productfilter'
import './filter.css'
import Listview from '../../components/listview/listview'




const Filter = () => {
  return (
    <div className='filter_nav_page_container'>
      <Productfilter/>
      <Listview/>
    </div>
  )
}

export default Filter