import React, { Component } from 'react';
import Menu from './components/Menu';
import Order from "./components/Order";
import Inventory from "./components/Inventory";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Order />
        <Inventory />
      </React.Fragment>
    );
  }
}

export default App;
