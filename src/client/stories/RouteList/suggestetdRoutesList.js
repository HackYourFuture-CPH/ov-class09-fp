import React from "react";
import SuggestedRouteBox from "../../components/RoutesList/SuggestedRouteBox";

export function suggestetdRoutesList() {
  const Data = [
    {
      theTime: "23h/ +7h",
      thePrice: "$100",
      eta: "19-07-13 22:22",
      sailDays: "5.5",
      maxWaveHs: "3m",
      avgSpeed: "15km",
      hireCost: "$200",
      consumption: "$30"
    },
    {
      theTime: "25h/ +9h",
      thePrice: "$200",
      eta: "22-07-13 22:22",
      sailDays: "5.5",
      maxWaveHs: "3m",
      avgSpeed: "15km",
      hireCost: "$200",
      consumption: "$70"
    },
    {
      theTime: "12h/ +6h",
      thePrice: "$300",
      eta: "19-07-13 22:22",
      sailDays: "5.5",
      maxWaveHs: "3m",
      avgSpeed: "15km",
      hireCost: "$200",
      consumption: "$50"
    }
  ];

  return (
    <div>
      {Data.map(i => {
        return (
          <SuggestedRouteBox
            theTime={i.theTime}
            thePrice={i.thePrice}
            eta={i.eta}
            sailDays={i.sailDays}
            maxWaveHs={i.maxWaveHs}
            avgSpeed={i.avgSpeed}
            hireCost={i.hireCost}
            consumption={i.consumption}
          />
        );
      })}
    </div>
  );
}

export default suggestetdRoutesList;
