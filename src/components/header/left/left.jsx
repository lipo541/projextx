import React from 'react'
import './left.css'
import brandlogo from '../../../assets/logo/atom.png'
import { Link } from 'react-router-dom'

const Left = () => {
  return (
    <div className='left'>
      <Link to={'./'}>
        <img src={brandlogo} alt="" />
      </Link>
        <span className='react_logo'> <b>react</b></span>
    </div>
  )
}

export default Left