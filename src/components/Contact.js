import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="cp">
        <nav className="nav">
          <Link to="/contact">contact</Link>
          <Link to="/contact/subpage1">contact1</Link>
          <Link to="/contact/subpage2">contact2</Link>
        </nav>
        <div>
          <Switch>
            <Route render={() => <p>default contact page</p>} exact path="/contact" />
            <Route render={() => <p>contact subpage 1</p>} path="/contact/subpage1" />
            <Route render={() => <p>contact subpage 2</p>} path="/contact/subpage2" />
          </Switch>
          <button onClick={() => this.props.history.goBack()}>Back</button>
        </div>
      </div>
    );
  }
}
