import React from "react";
import Field from "../Field";

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
      <Field title="HOURS" description={time} />
      <Field title="TOTAL COST" description={price} />
      {!isSelected ? (
        <button onClick={() => handleClick(id)}>SELECT ROUTE</button>
      ) : null}
    </div>
  );
}
