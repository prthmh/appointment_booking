import React from "react";
import "./BookingComponent.css";
import Calender from "./components/Calender";
import SlotSelection from "./components/SlotSelection";

const BookingComponent = () => {
  return (
    <div className="booking">
      <div className="calender">
        <Calender />
      </div>
      <div className="slots">
        <SlotSelection />
      </div>
      <div className="booking_footer">Booking footer</div>
    </div>
  );
};

export default BookingComponent;
