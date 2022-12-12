import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import LoginHandler from './pages/loginHandler';
import RegisterHandler from './pages/registerHandler';
import BeerList from './pages/beerList';
import OneBeer from './pages/oneBeer';
import LikedBeers from './pages/likedBeers';
import Footer from './footer';
import InitialSurvey from './pages/initialSurvey';


function App() {
  document.title = "Beer!";
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<header className="App-header"><Home /></header>}></Route>
        <Route path='/login' element={<header className="App-header"><LoginHandler /></header>}></Route>
        <Route path='/register' element={<header className="App-header"><RegisterHandler /></header>}></Route>
        <Route path='/oneBeer' element={<><Footer /><header className="beerheader"><OneBeer /></header></>}></Route>
        <Route path='/beerList' element={<><Footer /><header className="beerheader"><BeerList /></header></>}></Route>
        <Route path='/likedBeers' element={<><Footer /><header className="beerheader"><LikedBeers /></header></>}></Route>
        <Route path='/initialSurvey' element={<header className="beerheader"><InitialSurvey/></header>}></Route>
      </Routes>
    </div>
  );
}



export default App;
