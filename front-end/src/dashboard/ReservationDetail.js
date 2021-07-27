// component to style the reservation entries
import React from "react";
import { Link } from "react-router-dom";

function ReservationDetail({
  firstName,
  lastName,
  mobile,
  people,
  date,
  time,
  id,
}) {
  const seatingUrl = `/tables/${id}/seat`;

  return (
    <div className="row g-3 mb-4">
      <p className="col-2">{firstName}</p>
      <p className="col-2">{lastName}</p>
      <p className="col-3">{mobile}</p>
      <p className="col-1">{people}</p>
      <p className="col-2">{date}</p>
      <p className="col-1">{time}</p>
      <div className="col-1">
        <Link className="btn btn-secondary m-1" to={seatingUrl}>
          Seat
        </Link>
      </div>
    </div>
  );
}

export default ReservationDetail;
