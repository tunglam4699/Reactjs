import React, { Component } from 'react';
import Test from './components/Test';
import 'antd/dist/antd.css';

class App extends Component {

  
  render() {
    return (
      <div className="myapp">
        <Test/>
      </div>
    );
  }
}

export default App;