import React, { useEffect, useState } from "react";
import { listReservations } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";

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

  useEffect(loadDashboard, [date]);

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
  console.log(date);

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

  function dateChange() {
    const today = date;
  }

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="d-md-flex mb-3">
        <h4 className="mb-0">Reservations for date</h4>
      </div>
      <ErrorAlert error={reservationsError} />
      {JSON.stringify(data())}
      <div>
        <button type="button" className="btn btn-secondary">
          Previous
        </button>
        <button type="button" className="btn btn-secondary">
          Today
        </button>
        <button type="button" className="btn btn-secondary">
          Next
        </button>
      </div>
    </main>
  );
}

export default Dashboard;
