import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";

import "./Calender.css";
import { months, weekdays } from "../../../utils/constants";
import { generateDate } from "../../../utils/getDates";
import { useData } from "../../../context/CalenderContext";

const newD = new Date();
const Calender = () => {
  const [currMonthAndYear, setCurrMonthAndYear] = useState(newD);
  const { selectedDate, onDateChange } = useData();

  const dates = generateDate(
    currMonthAndYear.getMonth(),
    currMonthAndYear.getFullYear()
  );

  const onNextMonth = () => {
    const presentMonth = currMonthAndYear.getMonth();
    const presentYear = currMonthAndYear.getFullYear();
    const nextMonth = presentMonth === 11 ? 0 : presentMonth + 1;
    const year = nextMonth === 0 ? presentYear + 1 : presentYear;
    const newDate = new Date(year, nextMonth);
    setCurrMonthAndYear(newDate);
  };

  const onPrevMonth = () => {
    const presentMonth = currMonthAndYear.getMonth();
    const presentYear = currMonthAndYear.getFullYear();
    const prevMonth = presentMonth === 0 ? 11 : presentMonth - 1;
    const year = prevMonth === 11 ? presentYear - 1 : presentYear;
    const newDate = new Date(year, prevMonth);
    setCurrMonthAndYear(newDate);
  };

  const onDateSelection = (date) => {
    const pickedMonth = date.getMonth();
    const pickedYear = date.getFullYear();
    if (pickedMonth !== currMonthAndYear.getMonth()) {
      setCurrMonthAndYear(new Date(pickedYear, pickedMonth));
    }
    onDateChange(date);
  };

  const isSelected = (item) => {
    if (selectedDate) {
      return Boolean(
        selectedDate.getDate() === item.date.getDate() &&
          selectedDate.getMonth() === item.date.getMonth() &&
          selectedDate.getFullYear() === item.date.getFullYear()
      );
    } else {
      return false;
    }
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
            {months[currMonthAndYear.getMonth()]}{" "}
            {currMonthAndYear.getFullYear().toString().substring(2, 4)}
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
            {dates.map((item, index) => (
              <div
                className={isSelected(item) ? "dates selected_date" : "dates"}
                key={index}
                style={{ opacity: item.currentMonth ? "" : "0.6" }}
                onClick={() => onDateSelection(item.date)}
              >
                {item.date.getDate() < 10
                  ? "0" + item.date.getDate()
                  : item.date.getDate()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
