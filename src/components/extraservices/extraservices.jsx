import React from 'react'
import './extraservices.css'
import image1 from '../../assets/exstraservice-logos/image11.png'
import image22 from '../../assets/exstraservice-logos/image22.png'
import image33 from '../../assets/exstraservice-logos/image33.png'
import image44 from '../../assets/exstraservice-logos/image44.png'
import logo1 from '../../assets/exstraservice-logos/icon1.png'
import logo2 from '../../assets/exstraservice-logos/icon2.png'
import logo3 from '../../assets/exstraservice-logos/icon3.png'
import logo4 from '../../assets/exstraservice-logos/icon4.png'




const Extraservices = () => {
  return (
    <>
        <div className='service_container'>
            <span>Our extra services</span>
            <div className='service_container2'>
                <div className='service_info_cotainer'>
                    <img className='image1' src={image1} alt="" />
                    <div className='logo1_circle'>
                        <img className='logo1' src={logo1} alt="" />
                    </div>
                    <span>Source from <br/> Industry Hubs</span>
                </div>
                <div className='service_info_cotainer'>
                    <img className='image1' src={image22} alt="" />
                    <div className='logo1_circle'>
                        <img className='logo1' src={logo2} alt="" />
                    </div>
                    <span>Customize Your <br/>Products </span>
                </div>
                <div className='service_info_cotainer'>
                    <img className='image1' src={image33} alt="" />
                    <div className='logo1_circle'>
                        <img className='logo1' src={logo3} alt="" />
                    </div>
                    <span>Fast, reliable shipping  <br/> by ocean or air</span>
                </div>
                <div className='service_info_cotainer'>
                    <img className='image1' src={image44} alt="" />
                    <div className='logo1_circle'>
                        <img className='logo1' src={logo4} alt="" />
                    </div>
                    <span>Product monitoring  <br/>and inspection</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Extraservices