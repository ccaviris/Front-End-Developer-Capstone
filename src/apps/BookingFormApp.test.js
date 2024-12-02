import { render, screen } from "@testing-library/react";
import BookingFormApp from './BookingFormApp';

function dispatch(date) {
    return date;
  }

test('Renders the BookingForm heading', () => {
    const availableTimes = ['Please Select a Time', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    render(<BookingFormApp availableTimes={availableTimes} dispatch={dispatch}/>);

    const headingElement = screen.getByText("Make a reservation, trust us with your special occasion, and we may or may not honor honor that reservation!");
    expect(headingElement).toBeInTheDocument();
})