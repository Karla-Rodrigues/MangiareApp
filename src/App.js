import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Banner from "./components/banner";
import Counters from "./components/counters";
import Footer from "./components/footer";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        item: "Meal 01",
        image: require("./images/Food01.jpg"),
        value: 12.0,
        qtd: 0,
        total: 0.0,
      },
      {
        id: 2,
        item: "Meal 02",
        image: require("./images/Food02.jpg"),
        value: 15.0,
        qtd: 0,
        total: 0.0,
      },
      {
        id: 3,
        item: "Meal 03",
        image: require("./images/Food03.jpg"),
        value: 13.0,
        qtd: 0,
        total: 0.0,
      },
      {
        id: 4,
        item: "Meal 04",
        image: require("./images/Food04.jpg"),
        value: 14.0,
        qtd: 0,
        total: 0.0,
      },
      {
        id: 5,
        item: "Meal 05",
        image: require("./images/Food05.jpg"),
        value: 14.0,
        qtd: 0,
        total: 0.0,
      },
      {
        id: 6,
        item: "Meal 06",
        image: require("./images/Food01.jpg"),
        value: 12.0,
        qtd: 0,
        total: 0.0,
      },
      {
        id: 7,
        item: "Meal 07",
        image: require("./images/Food02.jpg"),
        value: 15.0,
        qtd: 0,
        total: 0.0,
      },
      {
        id: 8,
        item: "Meal 08",
        image: require("./images/Food03.jpg"),
        value: 13.0,
        qtd: 0,
        total: 0.0,
      },
      {
        id: 9,
        item: "Meal 09",
        image: require("./images/Food04.jpg"),
        value: 14.0,
        qtd: 0,
        total: 0.0,
      },
      {
        id: 10,
        item: "Meal 10",
        image: require("./images/Food05.jpg"),
        value: 14.0,
        qtd: 0,
        total: 0.0,
      },
      {
        id: 11,
        item: "Meal 11",
        image: require("./images/Food04.jpg"),
        value: 14.0,
        qtd: 0,
        total: 0.0,
      },
      {
        id: 12,
        item: "Meal 12",
        image: require("./images/Food05.jpg"),
        value: 14.0,
        qtd: 0,
        total: 0.0,
      },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].total += counters[index].value;
    counters[index].qtd++;
    this.setState({ counters });
  };

  handleRemove = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].qtd > 0) {
      counters[index].total -= counters[index].value;
      counters[index].qtd--;
    }
    this.setState({ counters });
  };

  handleReset = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].total = 0;
    counters[index].qtd = 0;
    this.setState({ counters });
  };

  render() {
    return (
      <div class="App">
        <Banner />
        <NavBar
          totalOrder={this.state.counters.reduce(function (total, counters) {
            return total + +counters.total;
          }, 0)}
        />
        <main>
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onRemove={this.handleRemove}
            onReset={this.handleReset}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
