import React, { Component } from "react";
import TitleAndDescribe from "../TitleAndDescribe";

export default class SuggestedRouteSummary extends Component {
  render() {
    const { time, price } = this.props;
    const { id, isSelected, handleClick } = this.props.props;
    return (
      <div>
        {isSelected ? <h4>SELECTED ROUTE</h4> : null}
        <TitleAndDescribe title="HOURS" description={time} />
        <TitleAndDescribe title="TOTAL COST" description={price} />
        {!isSelected ? (
          <button onClick={() => handleClick(id)}>SELECT ROUTE</button>
        ) : null}
      </div>
    );
  }
}
