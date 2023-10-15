import React from 'react'
import './mainbanner.css'
import Productlist from '../produclist/productlist'
import Banner from '../banner/banner'
import Register from '../register/register'

const Mainbanner = () => {
  return (
    <div className='banner_container'>
      <div className='banner_container2'>
        <Productlist/>
        <Banner/>
        <Register/>

      </div>
    </div>
  )
}

export default Mainbanner