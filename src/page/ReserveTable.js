import React, { useReducer } from "react";
import { useState } from "react";

import { fetchAPI, submitAPI } from "../api";
import ConfirmedBooking from "../components/ConfirmedBooking";

import BookingForm from "../components/BookingForm";

const updateTimes = (availableTimes, date) => {
  const newDate = fetchAPI(new Date(date));
  return newDate.length > 0 ? newDate : availableTimes;
};
const initializeTimes = () => {
  const date = new Date();

  return fetchAPI(date);
};

function ReserveTable({ className, children }) {
  const [isConfirmSubmit, setConfirmSubmit] = useState(false);
  const [availableTimes, dispatchTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const submitForm = (data) => {
    return submitAPI(data) ? setConfirmSubmit(true) : false;
  };
  const closeHandle=()=>{
    setConfirmSubmit(false)
  }
  return (
    <>
      {isConfirmSubmit ? (
        <ConfirmedBooking
          closeHandle={closeHandle}
          title="Reservation Completed!"
          description="Thank you for choosing Little Lemon! Your reservation has been successfully made. You will receive a confirmation email with the details of your reservation. We are excited to see you soon!"
        ></ConfirmedBooking>
      ) : null}
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      ></BookingForm>
    </>
  );
}

export default ReserveTable;
