import React, { Component } from "react";
import DataCard from "./DataCard";
import { CardGroup, CardGroupHeader } from "./CardGroup";

function CostWidget({ currentCost, remainingCost }) {
  let totalCost = currentCost + remainingCost;
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

export default CostWidget;
