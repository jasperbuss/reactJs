import React, { Component } from "react";
import "./App.css";
import Movie from "./components/movies";
class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="container" />
        <Movie />
      </div>
    );
  }
}

export default App;
