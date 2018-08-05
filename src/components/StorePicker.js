import React, { Component } from "react";
import { makeFunName, slugify } from "../util";

class StorePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  storeInput = React.createRef();

  visitStore = e => {
    e.preventDefault();
    const target = slugify(this.storeInput.current.value);
    this.props.history.push(`/store/${target}`);
  };

  render() {
    return (
      <div className="storepicker">
        <h2 className="title">Please enter a store</h2>
        <form className="storepicker__form" onSubmit={this.visitStore}>
          <input
            className="storepicker__input"
            defaultValue={makeFunName()}
            ref={this.storeInput}
          />
          <button className="btn" type="submit">
            Visit store ->
          </button>
        </form>
      </div>
    );
  }
}

export default StorePicker;
