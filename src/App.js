import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import nav from "./components/nav";
import routes from "./components/routes";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        {nav}
        {routes}
      </div>
    );
  }
}
