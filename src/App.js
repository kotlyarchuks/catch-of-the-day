import React, { Component } from "react";
import Menu from "./components/Menu";
import Order from "./components/Order";
import Inventory from "./components/Inventory";

class App extends Component {
  render() {
    return (
      <div className="store flex">
        <Menu />
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
