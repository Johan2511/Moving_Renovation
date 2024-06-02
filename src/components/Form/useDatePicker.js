import { useState } from 'react';

const useDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDatePickerOpen(false);
  };

  return { selectedDate, datePickerOpen, handleDateChange, setDatePickerOpen };
};

export default useDatePicker;
