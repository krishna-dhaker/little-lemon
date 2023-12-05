import React, { useState } from "react";
import { useDispatch } from 'react-redux';

const BookingForm = (props) => {
  const [date, setdate] = useState("");
  const [times, settimes] = useState("");
  const [guest, setguest] = useState("");
  const [occasion, setoccasion] = useState("");

  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    // Replace the placeholder action with your actual Redux action
    // Example: dispatch(makeReservation({ date, times, guest, occasion }));
    e.preventDefault();
    dispatch(e);
  };

  const handlechange = (e) => {
    setdate(e.target.value);
    // You might want to dispatch an action here as well
    setdate(e);
    dispatch(e);
  };

  return (
    <header>
      <section>
        <form>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handlechange(e)}
                type="date"
                required
              />
            </div>
            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => settimes(e.target.value)}
              >
                <option value="">Select a Time</option>
                {props.availableTimes.map((availableTime) => (
                  <option key={availableTime}>{availableTime}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="book-guest">Number of Guests:</label>
              <input
                id="book-guest"
                type="number"
                min="1"
                max="10"
                value={guest}
                onChange={(e) => setguest(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select
                id="book-occasion"
                value={occasion}
                onChange={(e) => setoccasion(e.target.value)}
              >
                <option>Birthdays</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div className="btnReceive">
              <input
                aria-label="on click"
                type="submit"
                value="Make Your Reservation"
                onClick={handlesubmit}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
