import { shortMonths, weekdays } from "./constants";
import { getTime } from "./getTime";

export const getAppointmentString = (slot, date) => {
  const appDay = weekdays[date.getDay()];
  const appDate = date.getDate();
  const appMonth = shortMonths[date.getMonth()];

  const timeSlot = `${getTime(slot.time.start_time)} - ${getTime(
    slot.time.end_time
  )}`;

  return `${appDay} ${appDate} ${appMonth} ${timeSlot} of ${slot.duration}`;
};
