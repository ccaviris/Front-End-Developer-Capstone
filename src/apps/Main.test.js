import { render, screen } from "@testing-library/react";
import Main from './Main';
import initializeTimes from './Main';

function dispatch(date) {
    return date;
  }

test('Renders the BookingForm heading', () => {
    const availableTimes = ['Please Select a Time', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const times = initializeTimes();

    expect(availableTimes == times);
})