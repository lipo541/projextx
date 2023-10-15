import React from 'react'
import './mainsale.css'
import Sale from '../sale'
import Timer from '../timer/timer'


const Mainsale = () => {
  return (
    <div className='sale_container'>
      <div className='sale_timer'>
        <Timer/>
      </div>
      <div className='sale_elements'>
        <Sale/>
    

      </div>
    </div>
  )
}

export default Mainsale