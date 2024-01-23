import React from 'react'
import Mainbanner from '../../components/banner/mainbanner/mainbanner'
import Mainsale from '../../components/offers/main_timing_sale/mainsale'
import Mainsource from '../../components/source/mainsource/mainsource'
import Advertisment from '../../components/advertisment/advertisment'
import Recomended from '../../components/recomended-items/recomended'
import Extraservices from '../../components/extraservices/extraservices'
import Region from '../../components/region/region'
import Email from '../../components/email'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Mainpage = () => {

  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);


  useEffect(() => {
    // Make the API request when the component mounts
    axios
      .get('https://digitalamazon.azurewebsites.net/api/product/latestproducts')
      .then((response) => {
        setProducts(response.data ) ; 
      })
      .catch((error) => {
        console.error('API request error:', error);
      });


    axios
      .get('https://digitalamazon.azurewebsites.net/api/product/mostdemandproducts')
      .then((response) => {
        setProducts2(response.data) ; 
      })
      .catch((error) => {
        console.error('API request error:', error);
      });


  }, []);
  return (
    <>
  
    <Mainbanner/>
    <Mainsale/>
    <Mainsource products ={products}/>
    <Mainsource products ={products2}/>
    <Advertisment/>
    <Recomended/>
    <Extraservices/>
    <Region/>
    <Email/>


    
    
    
    </>
)
}

export default Mainpage