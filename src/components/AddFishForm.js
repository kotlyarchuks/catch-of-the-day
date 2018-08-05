import React, { Component } from "react";

class AddFishForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="inventory__item bigger-border">
        <div className="inventory__top-row flex">
          <input
            className="inventory__name input padded inline lesser-border"
            placeholder="Fish name"
          />
          <input
            className="inventory__price input padded inline lesser-border"
            placeholder="Fish price"
          />
          <select className="inventory__status input padded inline">
            <option name="available">Fresh!</option>
            <option name="unavailable">Sold out</option>
          </select>
        </div>
        <textarea
          className="inventory__desc padded lesser-border input"
          placeholder="Fish Desc"
        />
        <input
          className="inventory__path input padded inline lesser-border"
          placeholder="Fish Image"
        />
        <div className="inventory__button lesser-border">
          <button className="btn remove-fish padded">Remove fish</button>
        </div>
      </div>
    );
  }
}

export default AddFishForm;
