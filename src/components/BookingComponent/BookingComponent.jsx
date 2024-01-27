import React from "react";
import { IoChevronForward } from "react-icons/io5";
import toast from "react-hot-toast";

import "./BookingComponent.css";
import Calender from "./components/Calender/Calender";
import SlotSelection from "./components/SlotSelection/SlotSelection";
import { useData } from "../../context/CalenderContext";
import { getAppointmentString } from "../../utils/getAppointmentString";

const BookingComponent = () => {
  const { selectedDate, selectedSlot, setSelectedDate, setSelectedSlot } =
    useData();

  const onNextClick = () => {
    if (selectedSlot.time && selectedSlot.duration) {
      toast.success(
        `Appointment Booked for ${getAppointmentString(
          selectedSlot,
          selectedDate
        )}`,
        {
          duration: 12000,
          position: "top-center",
          icon: "🥳",
          style: {
            backgroundColor: "#378760",
            color: "white",
          },
        }
      );

      setSelectedDate();
      setSelectedSlot({
        time: null,
        duration: "",
      });
    } else {
      if (!selectedSlot.time) {
        toast.error("Time not selected", {
          duration: 5000,
          position: "top-center",
          style: {
            backgroundColor: "rgba(255, 0, 0, 0.6)",
            color: "white",
          },
        });
      }

      if (!selectedSlot.duration) {
        toast.error("Time period or duration for appointment not selected", {
          duration: 5000,
          position: "top-center",
          style: {
            backgroundColor: "rgba(255, 0, 0, 0.6)",
            color: "white",
          },
        });
      }
    }
  };
  return (
    <div className="booking">
      <div className="calender">
        <Calender />
      </div>
      <div className="slots">
        <SlotSelection />
      </div>
      <div className="booking_footer">
        <div className="poweredby">
          Powered by <span id="appointo">Appointo</span>
        </div>
        <div className="next_btn" onClick={onNextClick}>
          <span id="next">Next</span>
          <span className="next_icon">
            <IoChevronForward />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookingComponent;
