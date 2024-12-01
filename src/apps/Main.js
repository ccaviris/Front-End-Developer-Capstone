import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeApp from './HomeApp.js'
import BookingPageApp from './BookingPageApp.js'



function Main() {
    return (
      <main>
        <BrowserRouter>
        <Routes> 
          <Route path="/" element={<HomeApp/>}></Route>
          <Route path="/home" element={<HomeApp/>}></Route>
          <Route path="/reservations" element={<BookingPageApp/>}></Route>
        </Routes>
        </BrowserRouter>
        <div>This is the main element</div>
      </main>
    );
  }

  export default Main;
