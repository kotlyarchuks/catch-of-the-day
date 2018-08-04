import React, { Component } from 'react';
import { makeFunName } from '../util'

class StorePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <p className="store-selector">{makeFunName()}</p>
     );
  }
}
 
export default StorePicker;