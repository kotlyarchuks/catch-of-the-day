import React, { Component } from "react";
import Menu from "./components/Menu";
import Order from "./components/Order";
import Inventory from "./components/Inventory";
import sampleFishes from "./sampleFishes";

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

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  render() {
    return (
      <div className="store flex">
        <Menu />
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
