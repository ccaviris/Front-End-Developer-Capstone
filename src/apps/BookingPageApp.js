import {useState} from "react"; 

import BookingFormApp from './BookingFormApp.js'

function BookingPageApp({availableTimes, dispatch}) {




    return (
        <>
            <h1>Online Reservation Service.</h1>
            <BookingFormApp availableTimes={availableTimes} dispatch={dispatch}/>
        </>
    );
  }

  export default BookingPageApp;
