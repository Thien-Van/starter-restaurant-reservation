// component to style the reservation entries
import React, { useEffect, useState } from "react";
import data from "../database";

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
      <a className="col-2">{firstName}</a>
      <a className="col-2">{lastName}</a>
      <a className="col-3">{mobile}</a>
      <a className="col-1">{people}</a>
      <a className="col-2">{date}</a>
      <a className="col-2">{time}</a>
    </div>
  );
}

export default ReservationDetail;
