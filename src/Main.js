import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import BeerList from './pages/beerList';
import OneBeer from './pages/oneBeer';
import LikedBeers from './pages/likedBeers';

const Main = () => {
    console.log("jvnewkjvnweinew")
  return (
    <Routes> 
      <Route path='/' element={<Home />}></Route>
      <Route path='/oneBeer' element={<OneBeer />}></Route>
      <Route path='/beerList' element={<BeerList />}></Route>
      <Route path='/likedBeers' element={<LikedBeers />}></Route>
    </Routes>
  );
}

export default Main;