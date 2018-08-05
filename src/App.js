import React, { Component } from "react";
import Menu from "./components/Menu";
import Order from "./components/Order";
import Inventory from "./components/Inventory";

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  };

  render() {
    return (
      <div className="store flex">
        <Menu />
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
