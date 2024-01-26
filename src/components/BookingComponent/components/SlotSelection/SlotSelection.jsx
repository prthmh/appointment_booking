import React, { useEffect, useState } from "react";
import axios from "axios";

import "./SlotSelection.css";
import { useData } from "../../../../context/CalenderContext";
import { shortMonths, fullWeekdays } from "../../../../utils/constants";
import { getDatesForAPIcall } from "../../../../utils/getDatesForAPIcall";
import { getTime } from "../../../../utils/getTime";
import TimeSlots from "./TimeSlots";

const SlotSelection = () => {
  const {
    selectedDate,
    selectedSlot,
    slotSelction,
    onDurationSelection,
    isLoading,
    setLoading,
  } = useData();
  const [currSlots, setCurrSlots] = useState([]);

  useEffect(() => {
    if (selectedDate) {
      setLoading(true);
      const makeAPIcall = async (date) => {
        try {
          const [startDate, endDate] = getDatesForAPIcall(date);

          const response =
            await axios(`https://app.appointo.me/scripttag/mock_timeslots?start_date=${startDate}&end_date=${endDate}
              `);
          setCurrSlots(response.data[0].slots);
          setLoading(false);
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

  return (
    <div className="slot_section">
      <div className="varients">
        <div>SELECT FROM VARIENTS</div>
        <select
          className="varient_dropdown"
          onChange={(e) => onDurationSelection(e.target.value)}
          value={selectedSlot?.duration}
        >
          <option value="">Please Select Time period</option>
          <option value="15 min">15 min</option>
          <option value="30 min">30 min</option>
          <option value="60 min">60 min</option>
          <option value="90 min">90 min</option>
        </select>
      </div>
      <hr />
      <div className="no_of_slots">
        <TimeSlots
          selectedDate={selectedDate}
          isLoading={isLoading}
          currSlots={currSlots}
          isSlotSelected={isSlotSelected}
          slotSelction={slotSelction}
        />
      </div>
    </div>
  );
};

export default SlotSelection;
