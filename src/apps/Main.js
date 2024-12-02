import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useReducer } from 'react';

import HomeApp from './HomeApp.js'
import BookingPageApp from './BookingPageApp.js'
import ChicagoApp from './ChicagoApp.js'
import SpecialsApp from './SpecialsApp.js'

//Running the script was blocked on the index page so I added it here. See: https://chromestatus.com/feature/5629709824032768
const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};
const submitAPI = function(formData) {
  return true;
};


//const availableTimes = ['Please Select a Time', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

const updateTimes = (date) => {
  console.log(date)
  return ['Please Select a Time', ...fetchAPI(new Date())];
}

const initializeTimes = () => {

  return ['Please Select a Time', ...fetchAPI(new Date())];
}

function Main() {
    const initialTimes = initializeTimes();

    const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

    //updateTimes

    return (
      <main>
        <BrowserRouter>
        <Routes> 
          <Route path="/" element={<HomeApp/>}></Route>
          <Route path="/home" element={<HomeApp/>}></Route>
          <Route path="/reservations" element={<BookingPageApp availableTimes={availableTimes} {...{dispatch}}/>}></Route>
          <Route path="/about" element={<ChicagoApp/>}></Route>
          <Route path="/menu" element={<SpecialsApp/>}></Route>
          <Route path="/order" element={<SpecialsApp/>}></Route>
        </Routes>
        </BrowserRouter>
      </main>
    );
  }

  export default Main;