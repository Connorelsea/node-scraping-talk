import React, { Component } from "react";
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

  renderCourse({ dept, name, num, hours }) {
    return (
      <div className="course">
        <h2>{dept} {num}</h2>
        <h3>{name}</h3>
        <p>Credit Hours {hours}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Search App</h1>
        <input type="text" onChange={this.onTextChange.bind(this)} />
        {this.state.results.map(course => this.renderCourse(course))}
      </div>
    );
  }
}

export default App;
