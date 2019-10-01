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
    return (
      <div style={SuggestedRouteCardStyle}>
        {select ? <h4>SELECTED ROUTE</h4> : null}
        <TitleAndDescribe
          title={this.props.time}
          description={this.props.theTime}
        />
        <TitleAndDescribe
          title={this.props.price}
          description={this.props.thePrice}
        />
        {!select ? (
          <button style={selectButton} onClick={this.onClick}>
            SELECT ROUTE
          </button>
        ) : null}
      </div>
    );
  }
}

const SuggestedRouteCardStyle = {
  backgroundColor: "#D9D9D9",
  width: "16.66%",
  float: "left",
  textAlign: "center",
  padding: "10px"
};

const selectButton = {
  backgroundColor: "#E5E5E5",
  border: "none",
  color: "#808080",
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "20px",
  marginBottom: "10px"
};
