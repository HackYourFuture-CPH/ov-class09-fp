import React, { Component } from "react";
import DataCard from "./DataCard";
import { CardGroup, CardGroupHeader } from "./CardGroup";
import PropTypes from "prop-types";

function CostWidget({ currentCost, remainingCost }) {
  const totalCost = currentCost + remainingCost;
  return (
    <div>
      <CardGroupHeader title="Cost Widget" />
      <CardGroup>
        <DataCard title="Current Cost" data={currentCost} />
        <DataCard title="Remaining Cost" data={remainingCost} />
        <DataCard title="Total Cost" data={totalCost} />
      </CardGroup>
    </div>
  );
}

CostWidget.propTypes = {
  currentCost: PropTypes.string,
  remainingCost: PropTypes.string
};

export default CostWidget;
