import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeApp from './HomeApp.js'
import BookingPageApp from './BookingPageApp.js'
import ChicagoApp from './ChicagoApp.js'
import SpecialsApp from './SpecialsApp.js'



function Main() {
    return (
      <main>
        <BrowserRouter>
        <Routes> 
          <Route path="/" element={<HomeApp/>}></Route>
          <Route path="/home" element={<HomeApp/>}></Route>
          <Route path="/reservations" element={<BookingPageApp/>}></Route>
          <Route path="/about" element={<ChicagoApp/>}></Route>
          <Route path="/menu" element={<SpecialsApp/>}></Route>
          <Route path="/order" element={<SpecialsApp/>}></Route>
        </Routes>
        </BrowserRouter>
      </main>
    );
  }

  export default Main;
