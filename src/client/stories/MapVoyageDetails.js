import React from "react";
import MapComponent from "../components/MapComponent";

export function MapVoyageDetails() {
  const vesselReports = [];

  const suggestedRoutes = [
    {
      id: 1,
      waypoints: [
        {
          longitude: 6.064453125,
          latitude: 55.3915921070334
        },
        {
          longitude: 6.0205078125,
          latitude: 53.8265967429941
        },
        {
          longitude: 4.63623046875,
          latitude: 53.42262754609993
        },
        {
          longitude: 4.24072265625,
          latitude: 52.82932091031373
        },
        {
          longitude: 3.53759765625,
          latitude: 51.82219818336938
        },
        {
          longitude: 3.69140625,
          latitude: 51.65892664880053
        }
      ]
    },
    {
      id: 2,
      waypoints: [
        {
          longitude: 4.7021484375,
          latitude: 55.3915921070334
        },
        {
          longitude: 1.47216796875,
          latitude: 53.69670647530323
        },
        {
          longitude: 1.8896484375,
          latitude: 52.89564866211353
        },
        {
          longitude: 1.9775390625,
          latitude: 52.16045455774706
        },
        {
          longitude: 3.6474609374999996,
          latitude: 51.6180165487737
        }
      ]
    },
    {
      id: 3,
      waypoints: [
        {
          longitude: 4.32861328125,
          latitude: 55.20395325785898
        },
        {
          longitude: 3.18603515625,
          latitude: 54.27805485967281
        },
        {
          longitude: 3.5815429687499996,
          latitude: 53.474969999548556
        },
        {
          longitude: 2.6806640625,
          latitude: 52.24125614966341
        },
        {
          longitude: 3.7353515625,
          latitude: 51.631657349449995
        }
      ]
    }
  ];

  const mapOptions = {
    centerMapCoordinates: [12.5244140625, 55.640398956687356],
    zoom: 1,
    style: {
      color: {
        suggestedRoute: "#F8AA13",
        elapsedRoute: "#1353F8"
      },
      marker: {
        markerComponent: null,
        defaultSize: "sm",
        selectedSize: "md"
      }
    }
  };

  return (
    <MapComponent
      vesselReports={vesselReports}
      suggestedRoutes={suggestedRoutes}
      options={mapOptions}
    />
  );
}
