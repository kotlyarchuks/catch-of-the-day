import React, { Component } from 'react';
import Test from "../css/images/test.jpg";

class Fish extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return <div className="menu__item flex sold-out">
        <div className="menu__img inline">
          <img src={Test} alt="" />
        </div>
        <div className="menu__content inline">
          <div className="menu__product-header flex">
            <h3 className="menu__title">Pacific Halibut</h3>
            <span className="menu__price">$17.24</span>
          </div>
          <div className="menu__desc">
            Everyones favorite white fish. We will cut it to the size you
            need and ship it.
          </div>
          <div className="menu__btn">
            <button className="btn">Add to order</button>
          </div>
        </div>
      </div>;
  }
}
 
export default Fish;