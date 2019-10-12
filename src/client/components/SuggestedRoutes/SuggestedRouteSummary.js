import React from "react";
import PropTypes from "prop-types";
import Field from "../Field";

export default function SuggestedRouteSummary({
  id,
  isSelected,
  handleClick,
  time,
  price
}) {
  const selectRouteBtn = () => {
    handleClick(id);
  };
  return (
    <div>
      {isSelected ? <h4>SELECTED ROUTE</h4> : null}
      <Field title="HOURS" description={time} />
      <Field title="TOTAL COST" description={price} />
      {!isSelected ? (
        <button onClick={selectRouteBtn}>SELECT ROUTE</button>
      ) : null}
    </div>
  );
}

SuggestedRouteSummary.propTypes = {
  id: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
};
