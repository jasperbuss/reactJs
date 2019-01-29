import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    query: ""
  };

  getInfo = () => {};

  handleInputChange = event => {
    this.setState({ query: this.search.value });
    event.preventDefault();
  };
  render() {
    return (
      <form action="submit">
        <input
          type="text"
          placeholder="search for"
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    );
  }
}

export default Searchbar;
