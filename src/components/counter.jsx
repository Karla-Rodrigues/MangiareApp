import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="list-picture">
        <img
          src={this.props.counter.image}
          width="100%"
          alt={this.props.counter.item}
        />

        <div class="list-detail c-dark">
          <h4>{this.props.counter.item}</h4>
          <h6>$ {this.props.counter.value.toFixed(2)}</h6>

          <button
            onClick={() => this.props.onRemove(this.props.counter)}
            className="btn btn-outline-danger btn-sm m-1"
          >
            -
          </button>

          <button className="btn btn-light btn-lg m-1 disabled">
            {this.props.counter.qtd}
          </button>

          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-outline-success btn-sm m-1"
          >
            +
          </button>

          <h4>
            <strong>$ {this.props.counter.total.toFixed(2)}</strong>
          </h4>
        </div>
      </div>
    );
  }
}

export default Counter;
