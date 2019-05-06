import React, { Component } from "react";


export default class Controls extends Component {
  state = {
    name: '',
    amount: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addEmployee = () => {
    const { name, amount } = this.state;
    if(name === '' || amount  === '' || isNaN(amount)){ return }
    this.props.store.addExpenses({ name, amount: parseInt(amount) });
    this.setState({ name: '', amount: ''})
  }

  clearList = () => {
    this.props.store.clearList();
    this.setState({ name: '', amount: ''})

  }

  render() {
    return (<div className="controls">
      <div className="input">
        <input name='name' placeholder="Expenses name" value={this.state.name} onChange={this.handleChange} />
        <input name='amount' placeholder='Amount' value={this.state.amount} onChange={this.handleChange} />
      </div>
      <div className="btn">
        <button onClick={this.clearList}> Clear table </button>
        <button onClick={this.addEmployee}>Add record</button>
      </div> 
      </div>

    )
  }
}