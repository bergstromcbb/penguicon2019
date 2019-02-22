import React, { Component } from 'react'
import BarImage from "../img/bar-image.png";

export class TitleBar extends Component {
  render() {
    return (
      <div className="bar-container">
        <img className="bar-image" src={BarImage}  alt="twitter"/>
        <div className="bar-text">asdf</div>
      </div>
    )
  }
}
export default TitleBar
