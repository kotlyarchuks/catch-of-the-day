import React, { Component } from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="inventory has-scroll">
        <h2 className="title">Inventory</h2>
        <AddFishForm addFish={this.props.addFish} />
        <AddFishForm />
        <button onClick={this.props.loadSampleFishes} className="btn">
          Load sample fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
