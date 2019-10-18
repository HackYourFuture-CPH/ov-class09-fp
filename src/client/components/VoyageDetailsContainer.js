import React, { Component } from "react";
import axios from "axios";
import VoyageDetails from "./VoyageDetails";
import CostWidget from "./CostWidget";
import SuggestedRouteTable from "./SuggestedRouteTable";
import camelcaseKeys from "camelcase-keys";
import MapComponent from "./MapComponent";
import Marker from "./Marker";
import { getTokenData, getAuthToken } from "../utilities/getTokenData";

export default class VoyageDetailsContainer extends Component {
  state = {
    voyageId: this.props.match.params.voyage_id,
    vesselReport: [],
    suggestedRoutes: [],
    vesselReportId: [],
    suggestedRouteId: [],
    voyageList: null,
    selectedRouteId: null,
    selectedRouteTable: [],
    departureTime: "",
    hfocosts: null,
    lsfocosts: null,
    vesselId: null,
    vesselName: "",
    departFrom: "",
    arriveAt: "",
    departureTime: "",
    vesselEta: "",
    date: "",
    latitude: null,
    longitude: null,
    hsfo: null,
    ulsfo: null,
    hfo: null,
    lsfo: null,
    hfocosts: null,
    lsfocosts: null,
    totalcost: null,
    depart_from_port: null,
    selectedRouteTableId: []
  };

  componentDidMount() {
    const headerObject = {
      // method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN1cGVydXNlciIsIm9yZ2FuaXphdGlvbl9pZCI6MSwidXNlcl9uYW1lIjoiYWRtaW4iLCJpYXQiOjE1NzE0MjU3ODEsImV4cCI6MTU3MTQ2MTc4MX0.f55T-lzSbkqrlY1oM5wfTwSdywzCBt15dwZUT55b6vo"
      }
    };
    console.log("Inside the component didcomponent");
    axios
      .get(`/api/voyages/${this.state.voyageId}/vessel-reports`, headerObject)
      .then(resp => camelcaseKeys((resp = resp.data)))
      .then(reportsArr => {
        axios
          .get(
            `/api/vessel-reports/${reportsArr[0].id}/suggested-routes`,
            headerObject
          )
          .then(data => camelcaseKeys((data = data.data)))
          .then(suggestedRoute => {
            this.setState({
              suggestedRoutes: suggestedRoute,
              vesselReport: reportsArr,
              vesselReportId: reportsArr[0].id,
              vesselEta: reportsArr[0].eta,
              longitude: reportsArr[0].longitude,
              latitude: reportsArr[0].latitude,
              selectedRouteId: reportsArr[0].selectedRouteId,
              hfoComsumption: reportsArr[0].hfoConsumption,
              lsfoComsumption: reportsArr[0].lsfoConsumption,
              date: reportsArr[0].createdAt,
              hsfo: suggestedRoute[0].hfo,
              ulsfo: suggestedRoute[0].lsfo,
              hfo: suggestedRoute[0].hfo,
              lsfo: suggestedRoute[0].lsfo,
              totalcost: suggestedRoute[0].totalCost
            });
          });
        axios
          .get(
            `/api/suggested-routes/${reportsArr[0].selectedRouteId}`,
            headerObject
          )
          .then(res => camelcaseKeys((res = res.data)))
          .then(selectedRoute => {
            this.setState({
              selectedRouteTableId: selectedRoute,
              selectedRouteTable: selectedRoute[0].waypoints
            });
          });
      });

    axios
      .get("/api/voyages/", headerObject)
      .then(resp => camelcaseKeys((resp = resp.data)))
      .then(voyageArr =>
        voyageArr.filter(voyage => voyage.id === parseInt(this.state.voyageId))
      )
      .then(voyageobj => {
        console.log("voyajeobj", voyageobj);
        axios
          .get(`/api/vessels/${voyageobj[0].vesselId}/`, headerObject)
          .then(res => camelcaseKeys((res = res.data)))
          .then(vesselobj => {
            this.setState({
              vesselName: vesselobj[0].name,
              departureTime: voyageobj[0].departureTime,
              hfocosts: voyageobj[0].hfocost,
              lsfocosts: voyageobj[0].lsfocost,
              vesselId: voyageobj[0].vesselId,
              departFromPort: voyageobj[0].departFromPort,
              arriveAtPort: voyageobj[0].arriveAtPort
            });
          });
        axios
          .get(`/api/ports/${voyageobj[0].departFromPort}/`, headerObject)
          .then(res => camelcaseKeys((res = res.data)))
          .then(portobj =>
            this.setState({
              departFrom: portobj[0].name
            })
          );

        axios
          .get(`/api/ports/${voyageobj[0].arriveÅtPort}/`, headerObject)
          .then(res => camelcaseKeys((res = res.data)))
          .then(portobj =>
            this.setState({
              arriveAt: portobj[0].name
            })
          );
      });
  }

  render() {
    const {
      vesselName,
      departFrom,
      arriveAt,
      departureTime,
      vesselEta,
      date,
      hsfo,
      lsfo,
      hfocosts,
      lsfocosts,
      hfoComsumption,
      lsfoComsumption,
      totalcost,
      selectedRouteTable,
      selectedRouteTableId
    } = this.state;
    let latitude = parseInt(this.state.latitude);
    let longitude = parseInt(this.state.longitude);
    let suggestedRouteTableFiltered = selectedRouteTable.map(
      ({ created_at, latitude, longitude, speed, rpm }) => ({
        created_at,
        latitude,
        longitude,
        speed,
        rpm
      })
    );
    var suggestedRouteTableData = suggestedRouteTableFiltered.map(waypoint => ({
      date: waypoint.created_at,
      latitude: waypoint.latitude,
      longitude: waypoint.longitude,
      speed: waypoint.speed,
      estimated_rpm: waypoint.rpm
    }));
    console.log("suggestedRouteTableData", suggestedRouteTableData);
    let suggestedRouteMap = selectedRouteTableId.map(({ id, waypoints }) => ({
      id,
      waypoints
    }));
    // let suggestedRoutesMapData = [{ selectedRouteTableId, suggestedRouteMap }];
    console.log("suggestedRoutesMap", suggestedRouteMap);

    return (
      <>
        <VoyageDetails
          vesselName={vesselName}
          departFrom={departFrom}
          arriveAt={arriveAt}
          etd={departureTime}
          eta={vesselEta}
          date={date}
          latitude={latitude}
          longitude={longitude}
          hsfo={hsfo}
          ulsfo={lsfo}
        />
        <CostWidget
          totalCost={totalcost}
          hfoCost={hfocosts}
          lsfoCost={lsfocosts}
          hfoConsumption={hfoComsumption}
          lsfoConsumption={lsfoComsumption}
        />
        <SuggestedRouteTable
          data={suggestedRouteTableData}
          tableNames={["DATE", "LATITUDE", "LONGTIDUE", "SPEED", "EST.RPM"]}
        />
      </>
    );
  }
}
// Configuration object for Map
const mapOptions = {
  centerMapCoordinates: [12.5244140625, 55.640398956687356],
  zoom: 1,
  style: {
    color: {
      suggestedRoute: "red",
      elapsedRoute: "blue"
    },
    marker: {
      markerComponent: Marker,
      defaultSize: "sm",
      selectedSize: "md"
    }
  }
};
