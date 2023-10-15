import React from 'react'
import './middle.css'
import arrow from '../../../assets/logo/arrow.png'
import search from '../../../assets/logo/search.png'

const Middle = () => {
  return (
    <div className='middle'>
      <img className='search_png' src={search} alt="" />
      <input type="text" placeholder='search'/>
      <div className='category_span'>
        <span>all category</span>
        <img src={arrow} alt="" />
      </div>
      <div className='button_container'>
        <button>Search</button>
      </div>
    </div>
  )
}

export default Middle