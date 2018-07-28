import React, { Component } from "react";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div class="order has-scroll">
        <h2 class="title">Your order</h2>
        <div class="order__item flex">
          <div class="order__name">1lbs Pacific Halibut</div>
          <div class="order__price">$17.24</div>
        </div>
        <div class="order__item flex">
          <div class="order__name">1lbs Pacific Halibut</div>
          <div class="order__price">$17.24</div>
        </div>
        <div class="order__total flex">
          <div>Total</div>
          <div>$17.24</div>
        </div>
      </div>;
  }
}

export default Order;
