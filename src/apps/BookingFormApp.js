import {useState} from "react"; 

function BookingFormApp({availableTimes, dispatch}) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState(availableTimes[0]);
    const [guestCount, setGuestCount] = useState(1);
    const [occasion, setOccasion] = useState("None");


    const getIsFormValid = () => {
        return (
            firstName &&
            date &&
            time &&
            (time != availableTimes[0])
        ) ;
      };

      const clearForm = () => {
        setFirstName("");
        setLastName("");
        setDate("");
        setTime(availableTimes[0]);
        setGuestCount(1);
        setOccasion("None");
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your Reservation is All Set! We look foreward to dissapointing you.");
        clearForm();
      };

      const newDate = (date) => {
        dispatch(date);
        setTime(availableTimes[0]);
        //alert(date);
      }


    return (
        <form onSubmit={handleSubmit}>
            <label>First name<sup>*</sup>:</label>
            <input
                value={firstName}
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}
                placeholder="First name"
            />

            <label>Last name:</label>
            <input
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
             placeholder="Last name"
           />

            <label for="res-date">Choose date<sup>*</sup>:</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => {
                    setDate(e.target.value);
                    newDate(e.target.value)
                }}
                />

            <label for="res-time">Choose time<sup>*</sup>:</label>
                <select
                    id="res-time "
                    value={time}
                    onChange={(e) => {
                        setTime(e.target.value);
                    }}
                >
                {availableTimes.map((availableTime) => <option>{availableTime}</option>)}
            </select>

            <label for="guests">Number of guests<sup>*</sup>:</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guestCount}
                onChange={(e) => {
                    setGuestCount(e.target.value);
                }}
                />
            <label for="occasion">Occasion: </label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => {
                    setOccasion(e.target.value);
                }}
            >
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>


            <button type="submit" disabled={!getIsFormValid()}>
                Make Your reservation!
            </button>
        </form>
    );
  }

  export default BookingFormApp;
