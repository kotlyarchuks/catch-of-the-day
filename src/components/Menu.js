import React, { Component } from 'react';
import Fish from './Fish'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return <div className="menu has-scroll">
        <div className="menu__header">
          <h1>Catch</h1>
          <span className="header__little">of the</span>
          <h1>Day</h1>
          <div className="header__subheader">
            <h2>Fresh Seafood Market</h2>
          </div>
        </div>
        <Fish />
      </div>;
  }
}
 
export default Menu;