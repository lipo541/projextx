import React, { useState } from 'react'
import './region.css'
import arabic from '../../assets/flags/arabic.png'
import china from '../../assets/flags/china.png'
import denmark from '../../assets/flags/denmark.png'
import france from '../../assets/flags/france.png'
import italy from '../../assets/flags/italy.png'
import russia from '../../assets/flags/russia.png'
import usa from '../../assets/flags/usa.png'

const Region = () => {
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  }

  return (
    <>
        <span className='region_span'>Suppliers by region</span>
        <div className='region_container'>
            <div className={`region_container2 ${showAll ? 'show' : ''}`}>
                <img src={denmark} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className={`region_container2 ${showAll ? 'show' : ''}`}>
                <img src={arabic} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className={`region_container2 ${showAll ? 'show' : ''}`}>
                <img src={china} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className={`region_container2 ${showAll ? 'show' : ''}`}>
                <img src={france} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className={`region_container2 ${showAll ? 'show' : ''}`}>
                <img src={italy} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className={`region_container2 ${showAll ? 'show' : ''}`}>
                <img src={russia} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className={`region_container2 ${showAll ? 'show' : ''}`}>
                <img src={usa} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className={`region_container2 ${showAll ? 'show' : ''}`}>
                <img src={denmark} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className={`region_container2 ${showAll ? 'show' : ''}`}>
                <img src={denmark} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className={`region_container2 ${showAll ? 'show' : ''}`}>
                <img src={denmark} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
        </div>  
        <span className='see-all' onClick={handleClick}>{showAll ? 'Close Tab' : 'See All'}</span>
    </>
  )
}

export default Region
