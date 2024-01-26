import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegCircleCheck } from "react-icons/fa6";

import "./SlotSelection.css";
import { useData } from "../../../context/CalenderContext";
import { shortMonths, fullWeekdays } from "../../../utils/constants";
import { getDatesForAPIcall } from "../../../utils/getDatesForAPIcall";
import { getTime } from "../../../utils/getTime";

const SlotSelection = () => {
  const { selectedDate, selectedSlot, slotSelction, onDurationSelection } =
    useData();
  const [currSlots, setCurrSlots] = useState([]);

  useEffect(() => {
    if (selectedDate) {
      const makeAPIcall = async (date) => {
        try {
          const [startDate, endDate] = getDatesForAPIcall(date);

          const response =
            await axios(`https://app.appointo.me/scripttag/mock_timeslots?start_date=${startDate}&end_date=${endDate}
              `);
          setCurrSlots(response.data[0].slots);
        } catch (err) {
          console.log(err);
        }
      };
      makeAPIcall(selectedDate);
      return;
    }
  }, [selectedDate]);

  const isSlotSelected = (slot) => {
    return Boolean(
      getTime(selectedSlot?.time?.start_time) === getTime(slot.start_time)
    );
  };
  console.log(selectedSlot);

  return (
    <div className="slot_section">
      <div className="varients">
        <div>SELECT FROM VARIENTS</div>
        <select
          className="varient_dropdown"
          onChange={(e) => onDurationSelection(e.target.value)}
        >
          <option>Please Select Time period</option>
          <option value="15 min">15 min</option>
          <option value="30 min">30 min</option>
          <option value="60 min">60 min</option>
          <option value="90 min">90 min</option>
        </select>
      </div>
      <hr />
      <div className="no_of_slots">
        {selectedDate ? (
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
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SlotSelection;
