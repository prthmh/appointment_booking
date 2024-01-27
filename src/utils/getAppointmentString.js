import { shortMonths, weekdays } from "./constants";
import { getTime } from "./getTime";

export const getAppointmentString = (slot, date) => {
  const appDay = weekdays[date.getDay()];
  const appDate = date.getDate();
  const appMonth = shortMonths[date.getMonth()];
  const appYear = date.getFullYear();

  const timeSlot = `${getTime(slot.time.start_time)} - ${getTime(
    slot.time.end_time
  )}`;

  return `${appDay}, ${appDate} ${appMonth} ${appYear}, between ${timeSlot} of ${slot.duration}`;
};
