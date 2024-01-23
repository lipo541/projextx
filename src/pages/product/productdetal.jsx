import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import axios from 'axios';
import Product from '../../components/detals/product';
import Aboutus from '../../components/aboutus';
import Save from '../../components/save/save';
import Advertisment from '../../components/advertisment/advertisment';

const Productdetal = () => {
  const { productId } = useParams(); // Access the productId parameter from the URL
  const [productDetal, setProductDetal] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`https://digitalamazon.azurewebsites.net/api/product/products/${productId}`)
      .then((response) => {
        setProductDetal(response.data);
        setImages(response.data.images);
      })
      .catch((error) => {
        console.error('API request error:', error);
      });
      
  }, [productId]);

  return (
    <>
      <Product productDetal={productDetal} images={images} />
      <Aboutus productDetal={productDetal} />
      <Advertisment />
      <Save />
    </>
  );
};

export default Productdetal;
