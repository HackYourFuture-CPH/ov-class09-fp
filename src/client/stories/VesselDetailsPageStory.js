import React from "react";
import VoyageDetails from "../components/VoyageDetails";
import VoyageDetailsContainer from "../components/VoyageDetailsContainer";
import CostWidget from "../components/CostWidget";
import SuggestedRouteTable from "../components/SuggestedRouteTable";
import { withKnobs, text, number, object } from "@storybook/addon-knobs";

export function VesselDetailsPageStory() {
  const suggestedRouteTable = object("Data", [
    {
      createdAt: "2019-02-21 01:58:33",
      latitude: 37.1270988,
      longitude: -8.2439177,
      speed: 16,
      rpm: 67
    },
    {
      createdAt: "2018-12-31 15:08:42",
      latitude: 26.630845,
      longitude: 106.750625,
      speed: 19,
      rpm: 93
    },
    {
      createdAt: "2019-01-01 09:08:50",
      latitude: 28.650932,
      longitude: 86.435767,
      speed: 19,
      rpm: 61
    }
  ]);
  const vesselReports = object("vesselReports", [
    {
      id: 1,
      voyage_id: 6,
      latitude: 53.45354,
      longitude: 89.34231,
      eta: "2020-03-02 06:50:33",
      current_speed: 172.72,
      hfo_consumption: 160.84,
      lsfo_consumption: 2383.28,
      created_at: "2019-10-15 21:48:16",
      selected_route_id: 1
    },
    {
      id: 2,
      voyage_id: 6,
      latitude: 53.45354,
      longitude: 89.34231,
      eta: null,
      current_speed: 182.47,
      hfo_consumption: 289.75,
      lsfo_consumption: 2561.45,
      created_at: "2019-10-15 21:48:16",
      selected_route_id: null
    },
    {
      id: 3,
      voyage_id: 8,
      latitude: 53.45354,
      longitude: 89.34231,
      eta: null,
      current_speed: 273.67,
      hfo_consumption: 135.07,
      lsfo_consumption: 2649.04,
      created_at: "2019-10-15 21:48:16",
      selected_route_id: null
    },
    {
      id: 4,
      voyage_id: 2,
      latitude: 53.45354,
      longitude: 89.34231,
      eta: null,
      current_speed: 224.25,
      hfo_consumption: 298.06,
      lsfo_consumption: 2480.17,
      created_at: "2019-10-15 21:48:16",
      selected_route_id: null
    },
    {
      id: 5,
      voyage_id: 6,
      latitude: 53.45354,
      longitude: 89.34231,
      eta: null,
      current_speed: 154.34,
      hfo_consumption: 282.51,
      lsfo_consumption: 2399.82,
      created_at: "2019-10-15 21:48:16",
      selected_route_id: null
    },
    {
      id: 6,
      voyage_id: 6,
      latitude: 53.45354,
      longitude: 89.34231,
      eta: null,
      current_speed: 103.06,
      hfo_consumption: 298.06,
      lsfo_consumption: 2308.08,
      created_at: "2019-10-15 21:48:16",
      selected_route_id: null
    },
    {
      id: 7,
      voyage_id: 9,
      latitude: 53.45354,
      longitude: 89.34231,
      eta: null,
      current_speed: 214.98,
      hfo_consumption: 232.08,
      lsfo_consumption: 2226.98,
      created_at: "2019-10-15 21:48:16",
      selected_route_id: null
    },
    {
      id: 8,
      voyage_id: 7,
      latitude: 53.45354,
      longitude: 89.34231,
      eta: null,
      current_speed: 240.75,
      hfo_consumption: 246.58,
      lsfo_consumption: 2090.28,
      created_at: "2019-10-15 21:48:16",
      selected_route_id: null
    },
    {
      id: 9,
      voyage_id: 3,
      latitude: 53.45354,
      longitude: 89.34231,
      eta: null,
      current_speed: 177.58,
      hfo_consumption: 103.42,
      lsfo_consumption: 2546.98,
      created_at: "2019-10-15 21:48:16",
      selected_route_id: null
    },
    {
      id: 10,
      voyage_id: 9,
      latitude: 53.45354,
      longitude: 89.34231,
      eta: null,
      current_speed: 293.33,
      hfo_consumption: 257.45,
      lsfo_consumption: 2934.17,
      created_at: "2019-10-15 21:48:16",
      selected_route_id: null
    },
    {
      id: 11,
      voyage_id: 9,
      latitude: 14.2277451,
      longitude: 99.89042,
      eta: null,
      current_speed: 11.3,
      hfo_consumption: 3305.41,
      lsfo_consumption: 7923.71,
      created_at: "2019-11-15 03:18:20",
      selected_route_id: null
    }
  ]);
  const latestVesselReport = object("latestVesselReport", {
    id: 2,
    voyage_id: 6,
    latitude: 53.45354,
    longitude: 89.34231,
    eta: null,
    current_speed: 182.47,
    hfo_consumption: 289.75,
    lsfo_consumption: 2561.45,
    created_at: "2019-10-15 21:48:16",
    selected_route_id: null
  });

  const voyage = object("voyage", [
    {
      id: 2,
      vessel_id: 5,
      departure_time: "2019-05-30 23:12:29",
      target_arrival_time: "2019-07-25 08:25:35",
      forwarddraft: 2700.99,
      aftdraft: 2513.15,
      optimisation_type: "earliest_arrival",
      depart_from_port: 1,
      arrive_at_port: 2,
      hfocost: 23930.4,
      lsfocost: 15000.8,
      hirerate: 11249.2,
      status: "created",
      created_at: "2019-10-15 21:48:15",
      updated_at: "2019-10-15 21:48:15"
    }
  ]);

  const vessel = object("vessel", {
    id: 2,
    organization_id: 2,
    mmsi: "477913500",
    name: "Boaty Mcboatface",
    created_at: "2019-10-15 21:48:14",
    updated_at: "2019-10-15 21:48:14"
  });

  return (
    <VoyageDetailsContainer
      voyageId={number("Voyage Id", 2)}
      voyage={object("Voyage", { voyage })}
      vesselReports={object("Vessel Reports", { vesselReports })}
      latestVesselReport={object("Latest Vessel Report", {
        latestVesselReport
      })}
      selectedRoute={object("SuggestedRouteTable", { suggestedRouteTable })}
      departFromPort={text("Departure From", "Sabetta")}
      arriveAtPort={text("Arrives At", "Rotterdam")}
      vessel={object("Vessel", { vessel })}
    />
  );
}
