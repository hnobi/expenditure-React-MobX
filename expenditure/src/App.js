import React, { Component } from "react";
import appStore from './store';
import Table from './component/Table';
import Controls from './component/Control';

class App extends Component {
  render() {
    return (
      <div className="container">
      <h1>Daily expenses</h1>
        <Controls store={appStore} />
        <Table store={appStore} />
      </div>
    );
  }
}
export default App;
