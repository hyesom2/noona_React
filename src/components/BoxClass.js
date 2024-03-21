import React, { Component } from 'react'

export default class BoxClass extends Component {
  render() {
    return (
      <div>
        <h1>BoxNum: { this.props.value }</h1>
      </div>
    )
  }
}
