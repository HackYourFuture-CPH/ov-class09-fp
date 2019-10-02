import React, { Component } from "react";
import TitleAndDescribe from "./TitleAndDescribe";

export default class SuggestedRouteCard extends Component {
  state = {
    selected: false
  };

  static defaultProps = {
    time: "HOURS",
    theTime: "26h / +6",
    price: "TOTAL CAST",
    thePrice: "$104.207 / -$6.208"
  };

  onClick = () => {
    this.setState({ selected: !this.selected });
  };

  render() {
    const select = this.state.selected;
    const { time, theTime, price, thePrice } = this.props;

    return (
      <div>
        {select ? <h4>SELECTED ROUTE</h4> : null}
        <TitleAndDescribe title={time} description={theTime} />
        <TitleAndDescribe title={price} description={thePrice} />
        {!select ? <button onClick={this.onClick}>SELECT ROUTE</button> : null}
      </div>
    );
  }
}
