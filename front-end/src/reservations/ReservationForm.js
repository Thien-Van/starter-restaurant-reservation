import React, { useState, useEffect } from "react";
import { today } from "../utils/date-time";

function ReservationForm({
  errorHandler,
  onSubmit,
  onCancel,
  initialState = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: 0,
  },
}) {
  const [reservation, setReservation] = useState(initialState);

  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    onSubmit(reservation);
  }

  function changeHandler({ target: { name, value } }) {
    setReservation((previousReservation) => ({
      ...previousReservation,
      [name]: value,
    }));
  }

  useEffect(() => {
    const resDate = reservation.reservation_date;
    if (resDate !== "") {
      // if (resDate.getDay() === 2) {
      //   const err = new Error("The restaurant is closed on Tuedays.");
      //   setError(err);
      // }
      if (resDate < today()) {
        const err = new Error("Can't select a date in the past.");
        errorHandler(err);
      }
      console.log(resDate, today());
    }
  }, [reservation.reservation_date, errorHandler]);

  useEffect(() => {
    const resTime = reservation.reservation_time;
    if (resTime !== "") {
      if (resTime < "10:30" || resTime > "21:30") {
        const err = new Error(
          "Please select a time during our opening hours from 10:30 to 21:30."
        );
        errorHandler(err);
      }
    }
  }, [reservation.reservation_time, errorHandler]);

  return (
    <form onSubmit={submitHandler} className="row g-3">
      <fieldset>
        <div className="form-group col-md-6">
          <label htmlFor="first_name" className="form-label">
            First name
          </label>
          <input
            name="first_name"
            type="text"
            className="form-control"
            id="first_name"
            placeholder="John"
            required={true}
            value={reservation.firstName}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="last_name" className="form-label">
            Last name
          </label>
          <input
            name="last_name"
            type="text"
            className="form-control"
            id="last_name"
            placeholder="Doe"
            required={true}
            value={reservation.lastName}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group col-12">
          <label htmlFor="mobile_number" className="form-label">
            Mobile number
          </label>
          <input
            name="mobile_number"
            type="text"
            className="form-control"
            id="mobile_number"
            placeholder="234-532-54"
            required={true}
            value={reservation.mobileNumber}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group col-12">
          <label htmlFor="reservation_date" className="form-label">
            Reservation date
          </label>
          <input
            name="reservation_date"
            type="date"
            className="form-control"
            id="reservation_date"
            min={today()}
            required={true}
            value={reservation.reservationDate}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group col-12">
          <label htmlFor="reservation_time" className="form-label">
            Reservation time
          </label>
          <input
            name="reservation_time"
            type="time"
            className="form-control"
            id="reservation_time"
            min="10:30"
            max="21:30"
            required={true}
            value={reservation.reservationTime}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group col-12">
          <label htmlFor="people" className="form-label">
            People in party
          </label>
          <input
            name="people"
            type="number"
            className="form-control"
            id="people"
            required={true}
            value={reservation.people}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group col-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <div className="form-group col-2">
          <button
            onClick={onCancel}
            type="cancel"
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default ReservationForm;
