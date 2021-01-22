import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Dashboard from "views/Dashboard";

function Routes() {
  return (
    <Router>
      <Route path="/">
        <Dashboard />
      </Route>
    </Router>
  );
}

export default Routes;
