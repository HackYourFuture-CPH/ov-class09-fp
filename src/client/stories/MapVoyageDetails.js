import React from "react";
import MapComponent from "../components/MapComponent";

export function MapVoyageDetails() {
  const vesselReports = [
    {
      id: 951,
      latitude: -6.4024844,
      longitude: 106.7942405
    },
    {
      id: 947,
      latitude: 48.9308651,
      longitude: 6.0376291
    },
    {
      id: 944,
      latitude: 41.7936783,
      longitude: -8.3338509
    },
    {
      id: 930,
      latitude: 30.66044,
      longitude: 120.013991
    },
    {
      id: 862,
      latitude: 34.0577762,
      longitude: 131.6460781
    },
    {
      id: 833,
      latitude: 31.2457401,
      longitude: 121.4824439
    },
    {
      id: 828,
      latitude: 30.3617348,
      longitude: -81.6966306
    },
    {
      id: 760,
      latitude: 7.1453088,
      longitude: 3.3590446
    },
    {
      id: 742,
      latitude: 7.9877141,
      longitude: -10.8479688
    },
    {
      id: 736,
      latitude: 15.1042521,
      longitude: 101.0768333
    },
    {
      id: 641,
      latitude: -6.5055,
      longitude: 106.4959
    },
    {
      id: 594,
      latitude: 43.46802,
      longitude: 132.46674
    },
    {
      id: 579,
      latitude: -6.2167736,
      longitude: 106.5230542
    },
    {
      id: 575,
      latitude: 41.554479,
      longitude: 121.725015
    },
    {
      id: 547,
      latitude: 32.92312,
      longitude: 115.805297
    },
    {
      id: 485,
      latitude: 12.6234721,
      longitude: -87.1273253
    },
    {
      id: 419,
      latitude: -8.3124202,
      longitude: 123.7238308
    },
    {
      id: 402,
      latitude: 39.9226132,
      longitude: 116.4606871
    },
    {
      id: 333,
      latitude: 31.221517,
      longitude: 121.544379
    },
    {
      id: 280,
      latitude: 40.4095521,
      longitude: 49.7653156
    }
  ];

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
        color: "blue",
        fill: true,
        fillColor: "blue",
        fillOpacity: 0.8,
        radius: 4
      },
      polyline: {
        dashArray: "10,5",
        lineJoin: "round",
        weight: 5,
        opacity: 0.7,
        color: "orange",
        stroke: true
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
