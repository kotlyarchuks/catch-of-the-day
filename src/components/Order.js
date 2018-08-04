import React, { Component } from "react";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="order has-scroll">
        <h2 className="title">Your order</h2>
        <div className="order__item flex">
          <div className="order__name">1lbs Pacific Halibut</div>
          <div className="order__price">$17.24</div>
        </div>
        <div className="order__item flex">
          <div className="order__name">1lbs Pacific Halibut</div>
          <div className="order__price">$17.24</div>
        </div>
        <div className="order__total flex">
          <div>Total</div>
          <div>$17.24</div>
        </div>
      </div>
    );
  }
}

export default Order;
