import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedSlot, setSelectedSlot] = useState({
    time: null,
    duration: null,
  });

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  const slotSelction = (slot) => {
    setSelectedSlot((prevState) => ({ ...prevState, time: slot }));
  };

  const onDurationSelection = (timeVarient) => {
    setSelectedSlot((prevState) => ({ ...prevState, duration: timeVarient }));
  };

  return (
    <DataContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        onDateChange,
        selectedSlot,
        slotSelction,
        onDurationSelection,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
