import React, { useState } from 'react';
import './product.css';
import axios from 'axios';
import aviable from '../../assets/logo/Aviable.png';
import favorite from '../../assets/logo/favorite2.png';
import basket from '../../assets/logo/basket.png';
import chat from '../../assets/logo/chat.png';
import circle from '../../assets/logo/circle.png';
import star from '../../assets/rating/4star.png';


const Product = ({productDetal, images}) => {

  const [selectedImage, setSelectedImage] = useState('');
  const handleAdd = (id) => {
    axios.post('https://digitalamazon.azurewebsites.net/api/cart/addincart',
    {
      productId:id,
    },
    {headers: {'Content-Type': 'application/json', Authorization:`Bearer ${JSON.parse(localStorage.getItem('myData'))}`}}
    )
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error('API request error:', error);
    });
  
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className='about_product_container'>
       {/* // პროდუქტის შესახებ ინფორმაცია , სურათები და ფასი*/}
    <div className='about_product_container2'>
      <div className='image_container'>
        <div className='main_image'>
          <img src={selectedImage? selectedImage : images[0]} alt='' />
        </div>

        <div className='small_images'>
          {images.map((item, i ) => {
            return <img key={i+54111} src={item} alt='' onClick={() => handleImageClick(item)} />
          })}
        </div>
      </div>

      <div className='info_container'>
        <div className='info_1'>
          <img src={aviable} alt="" />
          <p>{productDetal.name}</p>
        </div>

        <div className='info_2'>
          <div className='rating_star'>
            <img src={star} alt="" />
            <span className='star_span'>4.5</span>
          </div>

          <img src={circle} alt="" />
          <img src={chat} alt="" />
          <span>32 reviews</span>
          <img src={circle} alt="" />
          <img src={basket} alt="" />
          <span>154 sold</span>
        </div>

        <div className='info_3'>
          <div className='pink'>
            <div className='pink_box'> 
              <p>{productDetal.price}</p>
              <span>50-100 pcs</span>
            </div>
            <div className='pink_box'> 
              <p>$98.00</p>
              <span>50-100 pcs</span>
            </div>
            <div className='pink_box'> 
              <p>$98.00</p>
              <span>50-100 pcs</span>
            </div>
          </div>
        </div>

        <div className='description_box'>

          <div className='prise_span_1'>
            <div className='spans_boxx'>
              <span className='span_text'>Price: </span>
              <span className='span_text2'>Negotiable </span>
            </div>
            <div className='spans_boxx'>
              <span className='span_text'>Type:: </span>
              <span className='span_text2'>Classic  shoes </span>
            </div>
            <div className='spans_boxx'>
              <span className='span_text'>Material: </span>
              <span className='span_text2'>Plastic material  </span>
            </div>
            <div className='spans_boxx'>
              <span className='span_text'>Design: </span>
              <span className='span_text2'>Modern nice </span>
            </div>
            <div className='spans_boxx'>
              <span className='span_text'>Customization: </span>
              <span className='span_text2'>Customized logo and design  </span>
            </div>
            <div className='spans_boxx'>
              <span className='span_text'>Protection: </span>
              <span className='span_text2'>Refund Policy </span>
            </div>
            <div className='spans_boxx'>
              <span className='span_text'>Warranty: </span>
              <span className='span_text2'>2 years full warranty  </span>
            </div>
            
            <div className='add_cart_butt_cont'>
                <button onClick={() => {handleAdd(productDetal.id)}}>Add To Cart  </button>
                <img src={favorite} alt="" />

            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
  );
};

export default Product;
