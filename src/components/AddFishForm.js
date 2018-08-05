import React, { Component } from "react";

class AddFishForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  pathRef = React.createRef();

  handleClick = () => {
    this.props.addFish({
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value === "Fresh!",
      desc: this.descRef.current.value,
      path: this.pathRef.current.value
    });
    console.log(this.nameRef.current.value);
  };

  render() {
    return (
      <div className="inventory__item bigger-border">
        <div className="inventory__top-row flex">
          <input
            className="inventory__name input padded inline lesser-border"
            placeholder="Fish name"
            ref={this.nameRef}
          />
          <input
            className="inventory__price input padded inline lesser-border"
            placeholder="Fish price"
            ref={this.priceRef}
          />
          <select
            className="inventory__status input padded inline"
            ref={this.statusRef}
          >
            <option name="available">Fresh!</option>
            <option name="unavailable">Sold out</option>
          </select>
        </div>
        <textarea
          className="inventory__desc padded lesser-border input"
          placeholder="Fish Desc"
          ref={this.descRef}
        />
        <input
          className="inventory__path input padded inline lesser-border"
          placeholder="Fish Image"
          ref={this.pathRef}
        />
        <div className="inventory__button lesser-border">
          <button onClick={this.handleClick} className="btn remove-fish padded">
            + Add fish
          </button>
        </div>
      </div>
    );
  }
}

export default AddFishForm;
