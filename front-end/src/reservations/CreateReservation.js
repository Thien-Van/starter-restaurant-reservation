import React from "react";

function CreateReservation() {
  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label for="first_name" className="form-label">
          First name
        </label>
        <input
          name="first_name"
          type="text"
          className="form-control"
          id="first_name"
          required
        ></input>
      </div>
      <div className="col-md-6">
        <label for="last_name" className="form-label">
          Last name
        </label>
        <input
          name="last_name"
          type="text"
          className="form-control"
          id="last_name"
          required
        ></input>
      </div>
      <div className="col-12">
        <label for="mobile_number" className="form-label">
          Mobile number
        </label>
        <input
          name="mobile_number"
          type="text"
          className="form-control"
          id="mobile_number"
          required
        ></input>
      </div>
      <div className="col-12">
        <label for="reservation_date" className="form-label">
          Reservation date
        </label>
        <input
          name="reservation_date"
          type="date"
          className="form-control"
          id="reservation_date"
          required
        ></input>
      </div>
      <div className="col-12">
        <label for="reservation_time" className="form-label">
          Reservation time
        </label>
        <input
          name="reservation_time"
          type="time"
          className="form-control"
          id="reservation_time"
          required
        ></input>
      </div>
      <div className="col-12">
        <label for="people" className="form-label">
          People in party
        </label>
        <input
          name="people"
          type="number"
          className="form-control"
          id="people"
          required
        ></input>
      </div>
      <div className="col-2">
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
      <div className="col-2">
        <button type="cancel" class="btn btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CreateReservation;
