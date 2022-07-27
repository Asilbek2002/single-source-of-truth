import React, { Component } from "react";

class Counter extends Component {
  getCount = () => {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClass = () => {
    let className = "badge badge-lg p-2 me-2 bg-";
    className += this.props.counter.value === 0 ? "dark" : "info";
    return className;
  };

  render() {
    return (
      <div className="my-2">
        <span className={this.getBadgeClass()}>{this.getCount()}</span>
        <button
          className="btn btn-primary"  
          onClick={() => this.props.onIncrement(this.props.counter.id)}
        >
          Increment
        </button>

        <button
          className="btn btn-primary ms-2"  
          onClick={() => this.props.onDecrement(this.props.counter.id)}
        >
          Decrement
        </button>

        <button
          className="btn btn-danger ms-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
