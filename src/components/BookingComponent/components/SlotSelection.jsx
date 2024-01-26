import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import "./SlotSelection.css";
import { useData } from "../../../context/CalenderContext";
import { shortMonths, fullWeekdays } from "../../../utils/constants";
import { getDatesForAPIcall } from "../../../utils/getDatesForAPIcall";
import { getTime } from "../../../utils/getTime";

const SlotSelection = () => {
  const { selectedDate } = useData();
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
  console.log(currSlots);

  return (
    <div className="slot_section">
      <div className="varients">
        <div>SELECT FROM VARIENTS</div>
        <select className="varient_dropdown">
          <option>Please Select Time period</option>
          <option>15 min</option>
          <option>30 min</option>
          <option>60 min</option>
          <option>90 min</option>
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
                <div className="time_slots" key={index}>
                  {getTime(slot.start_time)} - {getTime(slot.end_time)}
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
