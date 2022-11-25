import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import BeerList from './pages/beerList';
import OneBeer from './pages/oneBeer';
import LikedBeers from './pages/likedBeers';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route  path='/' element={<Home />}></Route>
      <Route  path='/oneBeer' element={<OneBeer />}></Route>
      <Route  path='/beerList' element={<BeerList />}></Route>
      <Route  path='/likedBeers' element={<LikedBeers />}></Route>
    </Routes>
  );
}

export default Main;