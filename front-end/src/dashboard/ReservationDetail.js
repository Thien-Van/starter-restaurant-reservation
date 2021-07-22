// component to style the reservation entries
import React from "react";

function ReservationDetail({
  firstName,
  lastName,
  mobile,
  people,
  date,
  time,
}) {
  return (
    <div className="row g-3 mb-4">
      <p className="col-2">{firstName}</p>
      <p className="col-2">{lastName}</p>
      <p className="col-3">{mobile}</p>
      <p className="col-1">{people}</p>
      <p className="col-2">{date}</p>
      <p className="col-2">{time}</p>
    </div>
  );
}

export default ReservationDetail;
