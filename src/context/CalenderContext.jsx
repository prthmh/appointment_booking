import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState();

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <DataContext.Provider
      value={{ selectedDate, setSelectedDate, onDateChange }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
