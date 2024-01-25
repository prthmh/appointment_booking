import React, { useEffect, useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";

import "./Calender.css";
import { months, weekdays } from "../../../utils/constants";
import { generateDate } from "../../../utils/getDates";

const Calender = () => {
  const newD = new Date();
  const [currDate, setCurrDate] = useState(newD);

  //   useEffect(() => {
  //     setcurrDate(newD);
  //   }, [currDate]);

  const dates = generateDate(currDate.getMonth(), currDate.getFullYear());

  const onNextMonth = () => {
    const presentMonth = currDate.getMonth();
    const presentYear = currDate.getFullYear();
    const nextMonth = presentMonth === 11 ? 0 : presentMonth + 1;
    const year = nextMonth === 0 ? presentYear + 1 : presentYear;
    const newDate = new Date(year, nextMonth);
    setCurrDate(newDate);
  };

  const onPrevMonth = () => {
    const presentMonth = currDate.getMonth();
    const presentYear = currDate.getFullYear();
    const prevMonth = presentMonth === 0 ? 11 : presentMonth - 1;
    const year = prevMonth === 11 ? presentYear - 1 : presentYear;
    const newDate = new Date(year, prevMonth);
    setCurrDate(newDate);
  };

  return (
    <div className="calender_comp">
      <div className="cal_info">
        <h3>Test Service</h3>
        <div className="time_zone">
          Timezone: <span className="zone">Asia/Calutta</span>
        </div>
      </div>
      <div className="cal">
        <div className="date_info">
          <div className="icon" onClick={onPrevMonth}>
            <IoChevronBack />
          </div>
          <div className="curr_date">
            {months[currDate.getMonth()]}{" "}
            {currDate.getFullYear().toString().substring(2, 4)}
          </div>
          <div className="icon" onClick={onNextMonth}>
            <IoChevronForward />
          </div>
        </div>
        <div className="month">
          <div className="week">
            {weekdays.map((day, index) => (
              <div className="weekday" key={index}>
                {day}
              </div>
            ))}
          </div>
          <div className="month_dates">
            {dates.map((date, index) => (
              <div className="dates" key={index}>
                {date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
