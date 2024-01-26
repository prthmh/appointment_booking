export const getTime = (string) => {
  const dateString = new Date(string);
  const hours = dateString.getHours();
  const minutes = dateString.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedTime =
    (hours % 12) + ":" + (minutes < 10 ? "0" : "") + minutes + " " + ampm;
  return formattedTime;
};
