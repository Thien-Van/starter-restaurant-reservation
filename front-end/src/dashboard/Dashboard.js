import React, { useEffect, useState } from "react";
import { listReservations } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import ReservationDetail from "./ReservationDetail";
import { next, previous, today } from "../utils/date-time";

//debug database
import data from "../database";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ date }) {
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => setCurrentDate(date), []);
  useEffect(() => setReservations(data), [currentDate]);
  console.log("top", currentDate);

  // useEffect(loadDashboard, [date]);

  // new function to replicate loadDashboard with debug database
  // calls listReservations from utils/api with date as param
  function loadDashboard() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    return () => abortController.abort();
  }

  // replaced the return statement with one that works with the debug database
  // return (
  //   <main>
  //     <h1>Dashboard</h1>
  //     <div className="d-md-flex mb-3">
  //       <h4 className="mb-0">Reservations for date</h4>
  //     </div>
  //     <ErrorAlert error={reservationsError} />
  //     {JSON.stringify(reservations)}
  //   </main>
  // );

  //need to setup a useEffect/useState for date
  //sets date to current date -1
  const handlePrev = (event) => {
    event.preventDefault();
    console.log(currentDate);
    setCurrentDate(previous(currentDate));
  };

  const handleToday = (event) => {
    event.preventDefault();
    setCurrentDate(today());
  };

  const handleNext = (event) => {
    event.preventDefault();
    setCurrentDate(next(currentDate));
  };

  const reservationList = reservations.map((res, index) => (
    <ReservationDetail
      firstName={res.first_name}
      lastName={res.last_name}
      mobile={res.mobile_number}
      people={res.people}
      date={res.reservation_date}
      time={res.reservation_time}
      key={res.updated_at + index}
    />
  ));

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="d-md-flex mb-3">
        <h4 className="mb-0">Reservations for date</h4>
      </div>
      <ErrorAlert error={reservationsError} />
      {reservationList}
      <div className="row gx-3">
        <button
          type="button"
          className="btn btn-secondary col-2"
          onClick={handlePrev}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-secondary col-2"
          onClick={handleToday}
        >
          Today
        </button>
        <button
          type="button"
          className="btn btn-secondary col-2"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </main>
  );
}

export default Dashboard;
