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
  console.log("this is selected", isSelected);
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

      {/* {isSelected ? (
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
      )} */}

      {/* {isSelected ? <h4>SELECTED ROUTE</h4>
      <Field title="DURATION" description={duration} />
      <Field title="TOTAL COST" description={`$${price}`} /> : null}
      
      {!isSelected ? (
        <button onClick={selectRouteBtn}>SELECT ROUTE BTNNNNNNNN</button>
      ) : null} */}
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
