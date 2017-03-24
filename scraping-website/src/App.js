import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import request from "request-promise";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  onTextChange(event) {
    request(
      `http://localhost:4040/data/${event.target.value || " "}`
    ).then(response => this.setState({ results: JSON.parse(response) }));
  }

  render() {
    return (
      <div className="App">
        <h1>Search App</h1>
        <input type="text" onChange={this.onTextChange.bind(this)} />
        {this.state.results &&
          this.state.results.map((result, i) => (
            <p key={i}>{JSON.stringify(result)}</p>
          ))}
      </div>
    );
  }
}

export default App;
