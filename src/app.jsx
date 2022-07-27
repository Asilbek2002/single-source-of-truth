import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Counters from "./components/counters";
import NavBar from "./components/nav-bar";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 20 },
      { id: 2, value: 40 },
      { id: 3, value: 60 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (selectedId) => {
    const counters = this.state.counters.filter(({ id }) => id !== selectedId);
    this.setState({ counters });
  };

  handleReset = () => {
    this.state.counters.forEach((counter) => (counter.value = 0));
    this.setState(this.state);
  };

  handleIncrement = (selectedId) => {
    const idx = this.state.counters.findIndex(({ id }) => id === selectedId);
    const counter = this.state.counters[idx];
    counter.value++;
    this.setState(this.state);
  };

  handleDecrement = (selectedId) => {
    const idx = this.state.counters.findIndex(({ id }) => id === selectedId);
    const counter = this.state.counters[idx];
    if (counter.value > 0) {
      counter.value--;
      this.setState(this.state);
    }
  };

  render() {
    const amount = this.state.counters.filter(({value}) => value > 0).length;
    return (
      <>
        <NavBar amount={amount} />
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onClick = {this.handleReset}
        />
        ;
      </>
    );
  }
}
