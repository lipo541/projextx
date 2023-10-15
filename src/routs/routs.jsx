import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Registration from '../pages/registration/registration';
import Authorization from '../pages/authorization/authorization';
import Mainpage from '../pages/mainpage/mainpage';
import Filter from '../pages/filter/filter';
import Productdetal from '../pages/product/productdetal';
import Addcart from '../pages/addcart/addcart';
import Error from '../components/singlepages/error/error';

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/productdetal/:productId" element={<Productdetal />} />
      <Route path="/addcart" element={<Addcart />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/*" element={<Error />} />
      
    </Routes>
  );
};

export default Routs;
