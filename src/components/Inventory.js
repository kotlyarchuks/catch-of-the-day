import React, { Component } from "react";

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    <div className="inventory has-scroll">
      <h2 className="title">Inventory</h2>
      <div className="inventory__item bigger-border">
        <div className="inventory__top-row flex">
          <input className="inventory__name input padded inline lesser-border" placeholder="Fish name" />
          <input className="inventory__price input padded inline lesser-border" placeholder="Fish price" />
          <input className="inventory__status input padded inline lesser-border" placeholder="Fish status" />
        </div>
        <textarea className="inventory__desc padded lesser-border input" placeholder="Fish Desc"></textarea>
        <input className="inventory__path input padded inline lesser-border" placeholder="Fish Image" />
        <div className="inventory__button lesser-border">
          <button className="btn remove-fish padded">Remove fish</button>
        </div>
      </div>
      <br />
      <button className="btn">Load sample fishes</button>
    </div>
    );
  }
}

export default Inventory;
