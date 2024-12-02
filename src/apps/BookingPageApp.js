import {useState} from "react"; 

import BookingFormApp from './BookingFormApp.js'

function BookingPageApp({availableTimes, dispatch}) {




    return (
        <>
            <h1>Online Reservation Service.</h1>
            <p>Make a reservation, trust us with your special occasion, and we may or may not honor honor that reservation!</p>
            <BookingFormApp availableTimes={availableTimes} dispatch={dispatch}/>
        </>
    );
  }

  export default BookingPageApp;
