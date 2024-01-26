import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

import "./SlotSelection.css";
import { fullWeekdays, shortMonths } from "../../../../utils/constants";
import { getTime } from "../../../../utils/getTime";

const TimeSlots = ({
  selectedDate,
  isLoading,
  currSlots,
  isSlotSelected,
  slotSelction,
}) => {
  return (
    <>
      {" "}
      {selectedDate ? (
        isLoading ? (
          <>Loading....</>
        ) : (
          <>
            <div>
              {fullWeekdays[selectedDate.getDay()]},{" "}
              {shortMonths[selectedDate.getMonth()]} {selectedDate.getDate()} -
              Available Slots
            </div>
            <div className="slot_list">
              {currSlots.map((slot, index) => (
                <div
                  className={
                    isSlotSelected(slot)
                      ? "time_slot selected_time_slot"
                      : "time_slot"
                  }
                  key={index}
                  onClick={() => slotSelction(slot)}
                >
                  <span>
                    {getTime(slot.start_time)} - {getTime(slot.end_time)}
                  </span>
                  {isSlotSelected(slot) && (
                    <span className="checkmark_icon">
                      <FaRegCircleCheck />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </>
        )
      ) : (
        <>
          <h3 style={{ color: "var(--d-green)" }}>
            Select a Date to see the appointment times
          </h3>
        </>
      )}
    </>
  );
};

export default TimeSlots;
