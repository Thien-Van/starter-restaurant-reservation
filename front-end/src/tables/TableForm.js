import React, { useState, useEffect } from "react";
import { today } from "../utils/date-time";

function ReservationForm({
  errorHandler,
  onSubmit,
  onCancel,
  initialState = {
    table_name: "",
    capacity: 0,
    reservation_id: "",
  },
}) {
  const [table, setTable] = useState(initialState);

  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    onSubmit(table);
  }

  function changeHandler({ target: { name, value } }) {
    setTable((previousTable) => ({
      ...previousTable,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={submitHandler} className="row g-3">
      <fieldset>
        <div className="form-group col-md-6">
          <label htmlFor="table_name" className="form-label">
            Table name
          </label>
          <input
            name="table_name"
            type="text"
            className="form-control"
            id="table_name"
            placeholder="#1"
            required={true}
            value={table.table_name}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group col-12">
          <label htmlFor="capacity" className="form-label">
            Capacity
          </label>
          <input
            name="capacity"
            type="number"
            className="form-control"
            id="capacity"
            required={true}
            value={table.capacity}
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
