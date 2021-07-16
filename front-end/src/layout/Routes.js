import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import CreateReservation from "../reservations/CreateReservation";
import NotFound from "./NotFound";
import { today } from "../utils/date-time";

/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */

// needs function to handle date when return from reservations/new
function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/dashboard"} />
      </Route>
      {
        //route may be changed to /reservations to route to /reservations/new from there
      }
      <Route exact={true} path="/reservations/new">
        <CreateReservation />
      </Route>
      <Route path="/dashboard">
        <Dashboard date={today()} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
