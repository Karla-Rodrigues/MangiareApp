import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onIncrement, onRemove, onReset } = this.props;

    return (
      <div className="list-gallery">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onRemove={this.props.onRemove}
            onReset={this.props.onReset}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
