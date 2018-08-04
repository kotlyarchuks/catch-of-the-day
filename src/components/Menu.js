import React, { Component } from 'react';
import Fish from './Fish'
import Header from './Header'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return <div className="menu has-scroll">
        <Header />
        <Fish />
      </div>;
  }
}
 
export default Menu;