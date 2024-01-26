export const getDateFormat = (dateString) => {
  const month = dateString.getMonth();
  const year = dateString.getFullYear();
  const date = dateString.getDate();
  return `${year}-${month + 1}-${date}`;
};
export const getDatesForAPIcall = (dateString) => {
  const formatedStartDate = getDateFormat(dateString);
  const endDate = new Date(
    dateString.getFullYear(),
    dateString.getMonth(),
    dateString.getDate() + 1
  );
  const formatedEndDate = getDateFormat(endDate);
  return [formatedStartDate, formatedEndDate];
};
