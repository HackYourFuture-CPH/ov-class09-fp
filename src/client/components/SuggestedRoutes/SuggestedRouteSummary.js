import React from "react";
import TitleAndDescribe from "../TitleAndDescribe";

export default function SuggestedRouteSummary({
  id,
  isSelected,
  handleClick,
  time,
  price
}) {
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
