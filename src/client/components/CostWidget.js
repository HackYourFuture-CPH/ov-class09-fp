import React, { Component } from "react";
import DataCard from "./DataCard";
import { CardGroup, CardGroupHeader } from "./CardGroup";
import PropTypes from "prop-types";

function CostWidget({
  totalCost,
  hfoCost,
  lsfoCost,
  hfoConsumption,
  lsfoConsumption
}) {
  const currentCost = hfoCost * hfoConsumption + lsfoCost * lsfoConsumption;
  const remainingCost = totalCost - currentCost;

  return (
    <div>
      <CardGroupHeader title="Cost Widget" />
      <CardGroup>
        <DataCard title="Total Cost" data={totalCost} />
        <DataCard title="Current Cost" data={currentCost} />
        <DataCard title="Remaining Cost" data={remainingCost} />
      </CardGroup>
    </div>
  );
}

CostWidget.propTypes = {
  totalCost: PropTypes.number,
  hfoCost: PropTypes.number,
  lsfoCost: PropTypes.number,
  hfoConsumption: PropTypes.number,
  lsfoConsumption: PropTypes.number
};

export default CostWidget;
