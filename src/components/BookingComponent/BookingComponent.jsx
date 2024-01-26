import React from "react";
import { IoChevronForward } from "react-icons/io5";

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
      <div className="booking_footer">
        <div className="poweredby" >
          Powered by <span id="appointo" >Appointo</span>
        </div>
        <div className="next_btn">
          <span id="next" >Next</span>
          <span className="next_icon" ><IoChevronForward /></span>
        </div>
      </div>
    </div>
  );
};

export default BookingComponent;
