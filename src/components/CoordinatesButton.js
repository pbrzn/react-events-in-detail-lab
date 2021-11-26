// Code CoordinatesButton Component Here
import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  handleClick = (event) => {
    const x = event.clientX
    const y = event.clientY
    const result = [x, y]
    this.props.onReceiveCoordinates(result)
  }

  render() {
    return (
      <button onClick={this.handleClick}>
      Button
      </button>
    )
  }
}
