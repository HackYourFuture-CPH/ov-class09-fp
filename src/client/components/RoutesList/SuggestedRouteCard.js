import React, { Component } from "react";
import TitleAndDescribe from "./TitleAndDescribe";

export default class SuggestedRouteCard extends Component {
  render() {
    const { time, price, isSelected, onSelect, id } = this.props;

    return (
      <div>
        {isSelected ? <h4>SELECTED ROUTE</h4> : null}
        <TitleAndDescribe title="HOURS" description={time} />
        <TitleAndDescribe title="TOTAL COST" description={price} />
        {!isSelected ? (
          <button onClick={onSelect(id)}>SELECT ROUTE</button>
        ) : null}
      </div>
    );
  }
}
