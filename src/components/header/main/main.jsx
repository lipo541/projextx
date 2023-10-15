import React from 'react'
import './main.css'
import Left from '../left/left'
import Middle from '../middle/middle'
import Right from '../right'

const Main = () => {
  return (
    <header>
      <Left/>
      <Middle/>
      <Right/>
    </header>
  )
}

export default Main