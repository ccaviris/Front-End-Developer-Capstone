import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useReducer } from 'react';

import HomeApp from './HomeApp.js'
import BookingPageApp from './BookingPageApp.js'
import ChicagoApp from './ChicagoApp.js'
import SpecialsApp from './SpecialsApp.js'


//const availableTimes = ['Please Select a Time', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

const updateTimes = (date) => {
  let emptyTimes = ['Please Select a Time!!!!!'];
  //const times = fetchAPI(date);

  return ['Please Select a Time!!!!!', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
}

const initializeTimes = () => {
  return ['Please Select a Time', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
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