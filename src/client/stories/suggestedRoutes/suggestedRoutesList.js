import React from "react";
import SuggestedRoutesList from "../../components/SuggestedRoutes/SuggestedRoutesList";
import { object } from "@storybook/addon-knobs";

export function suggestedRoutesList() {
  const Data = object("list", [
    {
      suggested_route_id: 1,
      time: "23h/ +7h",
      price: "$100",
      eta: "19-07-13 22:22",
      sailDays: "5.5",
      maxWaveHs: "3m",
      avgSpeed: "15km",
      hireCost: "$200",
      consumption: "$30"
    },
    {
      suggested_route_id: 2,
      time: "25h/ +9h",
      price: "$200",
      eta: "22-07-13 22:22",
      sailDays: "5.5",
      maxWaveHs: "3m",
      avgSpeed: "15km",
      hireCost: "$200",
      consumption: "$70"
    },
    {
      suggested_route_id: 3,
      time: "12h/ +6h",
      price: "$300",
      eta: "19-07-13 22:22",
      sailDays: "5.5",
      maxWaveHs: "3m",
      avgSpeed: "15km",
      hireCost: "$200",
      consumption: "$50"
    }
  ]);

  return <SuggestedRoutesList list={Data} />;
}

export default suggestedRoutesList;
