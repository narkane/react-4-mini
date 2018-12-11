import React, { Component } from "react";
import { Link } from "react-router-dom";
import Routes from "./Routes";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/">
            <p>Route 1</p>
          </Link>
          <Link to="/2">
            <p>Route 2</p>
          </Link>
          <Link to="/3">
            <p>Route 3</p>
          </Link>
          {Routes}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
