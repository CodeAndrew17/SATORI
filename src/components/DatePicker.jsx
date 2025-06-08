import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

// Estilos personalizados para el DatePicker
const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);

  .react-datepicker {
    background-color: transparent;
    border: none;
    font-family: 'Arial', sans-serif;
    color: white;
  }

  .react-datepicker__day,
  .react-datepicker__day-name,
  .react-datepicker__current-month,
  .react-datepicker__header,
  .react-datepicker__month,
  .react-datepicker__year,
  .react-datepicker__navigation {
    color: white;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: #2A8E9B;
    color: white;
    border-radius: 50%;
  }

  .react-datepicker__header {
    background-color: rgba(255, 255, 255, 0.1);
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .react-datepicker {
      width: 100%;
      font-size: 0.9rem;
    }
  }
`;

const MyDatePicker = ({ selectedDate, onChange }) => {
  const [startDate, setStartDate] = useState(selectedDate || new Date());

  const handleChange = (date) => {
    setStartDate(date);
    if (onChange) onChange(date);
  };

  return (
    <CalendarWrapper>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        dateFormat="yyyy/MM/dd"
        inline
      />
    </CalendarWrapper>
  );
};

export default MyDatePicker;
