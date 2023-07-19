import React, { useEffect } from "react";
import { useState } from "react";
import { validateEmail } from "../utils";


function BookingForm({ className ,availableTimes,submitForm,dispatchTimes}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guest, setGuest] = useState("1");
  const [occasion, setOccation] = useState("occasion");


  const clearForm = () => {
    setDate("");
    setTime("17:00");
    setGuest("1");
    setOccation("occasion");
  };
  const getIsFormValid = () => {
    return date && time && guest > 0 && occasion !== "occasion";
  };

  useEffect(() => {
    // const newTime = availableTimes.filter((time) => {
    //   return Math.random() > 0.5;
    // });
    const defaultDate= new Date()
    console.log(defaultDate)
    dispatchTimes(defaultDate)
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    
    submitForm({date,time,guest,occasion})
    clearForm();
  };

  return (
    <div className="reserveTable-Container">
      {/* <h1>ReserveTable page</h1>
      <p>date : {date}</p>
      <p>time : {time}</p>
      <p>num guest : {guest}</p>
      <p>occasion : {occasion}</p>
         { getIsFormValid() ? <p>true</p>:<p>false</p> } */}
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        <label className="form-label" for="res-date">
          Choose date
        </label>
        <input
          className="form-control "
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            dispatchTimes(date)
          }}
        />
        <label className="form-label" for="res-time">
          Choose time
        </label>
        <select
          id="res-time "
          className="form-select"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
            
          }}
        >
          {availableTimes.map((time) => {
            return <option >{time}</option>;
          })}
        </select>
        <label className="form-label" for="guests">
          Number of guests
        </label>
        <input
          className="form-control"
          type="number"
          placeholder={guest}
          min="1"
          max="10"
          id="guests"
          value={guest}
          onChange={(e) => {
            setGuest(e.target.value);
          }}
        />
        <label className="form-label" for="occasion">
          Occasion
        </label>
        <select
          id="occasion"
          className="form-select"
          value="occasion"
          onChange={(e) => {
            setOccation(e.target.value);
          }}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          className="btn"
          type="submit"
          value="Make Your reservation"
          disabled={!getIsFormValid()}
        />
      </form>
    </div>
  );
}

export default BookingForm;
