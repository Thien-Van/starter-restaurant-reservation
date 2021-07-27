import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TableForm from "./TableForm";
import ErrorAlert from "../layout/ErrorAlert";
import { createTable } from "../utils/api";

function TableCreate() {
  const history = useHistory();

  const [error, setError] = useState(null);

  function submitHandler(reservation) {
    console.log(reservation);
    // const abortController = new AbortController();
    // createTable(reservation, abortController.signal)
    //   .then(() => history.push(`/dashboard`))
    //   .catch(setError);
    // return () => abortController.abort();
  }

  function cancelHandler() {
    history.goBack();
  }

  function errorHandler(error) {
    console.log(error);
  }

  return (
    <div>
      <h1>Create Table</h1>
      <ErrorAlert error={error} />
      <TableForm
        onSubmit={submitHandler}
        onCancel={cancelHandler}
        errorHandler={errorHandler}
      />
    </div>
  );
}

export default TableCreate;
