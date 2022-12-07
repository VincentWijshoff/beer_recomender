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
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<header className="App-header"><Home /></header>}></Route>
        <Route path='/login' element={<header className="App-header"><LoginHandler /></header>}></Route>
        <Route path='/register' element={<header className="App-header"><RegisterHandler /></header>}></Route>
        <Route path='/oneBeer' element={<><Footer /><header className="beerheader"><OneBeer /></header></>}></Route>
        <Route path='/beerList' element={<><Footer /><header className="beerheader"><BeerList /></header></>}></Route>
        <Route path='/likedBeers' element={<><Footer /><header className="beerheader"><LikedBeers /></header></>}></Route>
        <Route path='/initialSurvey' element={<header className="beerheader"><InitialSurvey /></header>}></Route>
      </Routes>
    </div>
  );
}





// $(function(){
  
//   item_height=$(".item").outerHeight(true);
//   height=(item_height+2)*($(".item").length+1);
//   $(".source-container,.destination-container").height(height);
  
    

//   $(".source .item").draggable({
//     revert:"invalid",
//     start:function(){
      
//       $(this).data("index",$(this).parent().index());
      
//     }
//   });
  
//   $(".destination").droppable({
//       drop:function(evern,ui){
//           if($(this).has(".item").length){
//             if(ui.draggable.parent().hasClass("source")){
//                 index=ui.draggable.data("index");
//                 ui.draggable.css({left:"0",top:"0"}).appendTo($(".source").eq(index));
//             }
//             else{
//              ui.draggable.css({left:"0",top:"0"}).appendTo($(this));
//               index=ui.draggable.data("index");
//               $(this).find(".item").eq(0).appendTo($(".destination").eq(index))
//             }
//           }
//         else{
//           ui.draggable.css({left:"1px",top:"1px"});
//           ui.draggable.appendTo($(this));
//           $(".destination").removeClass("ui-droppable-active");
//         }
//       }
//   });
  
//   $(".source").droppable({
//     accept: function(draggable) {
//         return $(this).find("*").length == 0;
//     },
//    drop:function(event,ui){
//      ui.draggable.css({left:"0",top:"0"}).appendTo($(this))
//    }
//   })
  
  
  
  
// })



export default App;
