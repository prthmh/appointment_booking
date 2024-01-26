export const generateDate = (month, year) => {
  const firstDateOfMonth = new Date(year, month, 1);
  const lastDateOfMonth = new Date(year, month, getDaysInMonth(month, year));

  const arrayOfDates = [];

  const previousMonth = month === 0 ? 11 : month - 1;
  const previousYear = previousMonth === 11 ? year - 1 : year;
  const firstDayOfMonth = firstDateOfMonth.getDay();
  const lastDateOfLastMonth = new Date(year, month, 0).getDate();

  //prefix
  for (let i = firstDayOfMonth; i > 0; i--) {
    arrayOfDates.push({
      date: new Date(previousYear, previousMonth, lastDateOfLastMonth - i + 1),
      currentMonth: false,
    });
  }

  //curr month
  for (
    let i = firstDateOfMonth.getDate();
    i <= lastDateOfMonth.getDate();
    i++
  ) {
    arrayOfDates.push({ date: new Date(year, month, i), currentMonth: true });
  }

  //suffixx
  const remainingDates = 42 - arrayOfDates.length;
  for (let i = 1; i < remainingDates + 1; i++) {
    arrayOfDates.push({
      date: new Date(year, month + 1, i),
      currentMonth: false,
    });
  }

  return arrayOfDates;
};

function getDaysInMonth(month, year) {
  switch (month) {
    case 0: // January
    case 2: // March
    case 4: // May
    case 6: // July
    case 7: // August
    case 9: // October
    case 11: // December
      return 31;
    case 3: // April
    case 5: // June
    case 8: // September
    case 10: // November
      return 30;
    case 1: // February
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 29;
      } else {
        return 28;
      }
    default:
      throw new Error(
        "Invalid month number. Month should be between 0 and 11."
      );
  }
}
