import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={About} path="/about" />
    <Route component={Contact} path="/contact" />
  </Switch>
);
