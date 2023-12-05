import React, { useReducer } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Booking from "./Booking"; // Assuming you have a Booking component

const Main = () => {
  const setRandom = function(seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function() {
      return (s = (s * a) % m) / m; // Fixing the calculation here
    };
  };

  const fetchAPI = function(date) {
    let result = [];
    let random = setRandom(date.getDate()); // Fixing the seedrandom function
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() > 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const submitAPI = function(formData) {
    return true;
  };

  const initialStates = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialStates);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date()) };
  }

  const navigate = Navigate(); // Create a navigate function

  const submitForm = function(formData) {
    if (submitAPI(formData)) {
      // Use navigate without curly braces
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        {/* Assuming you have a Booking component */}
        <Route
          path="/booking"
          element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm} />}
        />
        {/* Add a Redirect or another Route for the homepage */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
};

export default Main;
