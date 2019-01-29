import React, { Component } from "react";
import Movies from "./components/movies";
import { Route, Switch, Redirect } from "react-router-dom";
import Costumers from "./components/costumers";
import Rentals from "./components/rentals";
import notFound from "./components/notFound";
import NavBar from "./components/navBar";
import movieForm from "./components/movieForm";
import LoginForm from "./components/LoginForm";
import "./App.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <NavBar />
          <Switch>
            <Route path="/login/" component={LoginForm} />
            <Route path="/movies/:id" component={movieForm} />
            <Route path="/costumers" component={Costumers} />
            <Route path="/movies" component={Movies} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/notFound" component={notFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/notFound" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
