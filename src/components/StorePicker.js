import React, { Component } from "react";
import { makeFunName } from "../util";

class StorePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="storepicker">
        <h2 className="title">Please enter a store</h2>
        <form className="storepicker__form">
          <input className="storepicker__input" defaultValue={makeFunName()} />
          <button className="btn">Visit store -></button>
        </form>
      </div>
    );
  }
}

export default StorePicker;
