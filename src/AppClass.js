import React, { Component } from 'react'
import BoxClass from './components/BoxClass';

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      num: 1,
      value: 0
    };
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1,
      value: this.state.value + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>count: { this.state.count }</h1>
        <button type="button" onClick={ this.increase }>Click!</button>
        <BoxClass value={ this.state.value } />
      </div>
    )
  }
}
