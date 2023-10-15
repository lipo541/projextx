import React from 'react'
import './banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='middle_banner'>
      <div className='banner_text'>
        <span className='lastest_trendig_span'>Latest trending </span>
        <span className='electronic_span'>Electronic items</span>
        <Link to={'./filter'}>
         <button>Learn more</button>
        </Link>
      </div>
    </div>
  )
}

export default Banner