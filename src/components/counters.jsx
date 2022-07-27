import { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
 
  render() {
    const { counters } = this.props;
    console.log(counters);
    return (
      <div className="p-3">
        <button onClick={this.props.handleReset} className="btn btn-primary btn-lg">
          Reset
        </button>
        {counters.map((counter, idx) => (
          <Counter
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
