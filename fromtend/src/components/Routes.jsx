import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashbord" component={Dashboard} />
    </Switch>
  </Router>
);

export default Routes;
