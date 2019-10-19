import React from "react";
import PropTypes from "prop-types";
import Field from "../Field";

export default function SuggestedRouteSummary({
  id,
  isSelected,
  handleClick,
  duration,
  price
}) {
  const selectRouteBtn = () => {
    handleClick(id);
  };

  return (
    <div>
      <>
        {!isSelected ? (
          <>
            <Field title="DURATION" description={duration} />
            <Field title="TOTAL COST" description={`$${price}`} />
            <button onClick={selectRouteBtn}>SELECT ROUTE </button>
          </>
        ) : (
          <>
            <h2>Selected Route</h2>
            <Field title="DURATION" description={duration} />
            <Field title="TOTAL COST" description={`$${price}`} />
          </>
        )}
      </>
    </div>
  );
}

SuggestedRouteSummary.propTypes = {
  id: PropTypes.number.isRequired,
  isSelected: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  duration: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
