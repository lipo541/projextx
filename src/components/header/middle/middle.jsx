import React, { useState } from 'react'
import './middle.css'
import arrow from '../../../assets/logo/arrow.png'
import search from '../../../assets/logo/search.png'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Middle = () => {
  const [search, setSearch] = useState('')
  const [searchParams, setSearchParams ] = useSearchParams()
  const params = Object.fromEntries([...searchParams]);
  const navigate = useNavigate()

  const handleSearch = () => {
    setSearchParams ({
      ...params,
      searchKey: search, 

    })
    navigate(`/filter?searchKey=${search}`)
  }


  return (
    <div className='middle'>
      <img className='search_png' src={search} alt="" />
      <input value={search} onChange={(e) => (setSearch(e.target.value))} type="text" placeholder='search'/>
      <div className='category_span'>
        <span>all category</span>
        <img src={arrow} alt="" />
      </div>
      <div className='button_container'>
        <button onClick={()=>(handleSearch ())}> Search</button>
      </div>
    </div>
  )
}

export default Middle