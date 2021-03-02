import styles from "./AppStyles.js";
import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Portfolio from "./Screens/Portfolio/Portfolio";
import Dashboard from "./Screens/Dashboard/Dashboard";

const AdminViews = () => {
  const appStyles = styles();
  return (
    <div className={appStyles.App}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default AdminViews;
