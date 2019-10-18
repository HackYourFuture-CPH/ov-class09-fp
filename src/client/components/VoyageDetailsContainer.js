import React, { Component } from "react";
import axios from "axios";
import VoyageDetails from "./VoyageDetails";
import CostWidget from "./CostWidget";
import SuggestedRouteTable from "./SuggestedRouteTable";

export default class VoyageDetailsContainer extends Component {
  state = {
    voyageId: this.props.match.params.voyage_id,
    vessel_report: [],
    suggested_routes: [],
    vessel_report_id: [],
    suggested_route_id: [],
    voyageList: null,
    selected_route_id: null,
    selected_route_table: [],
    departure_time: "",
    hfocosts: null,
    lsfocosts: null,
    vessel_id: null,
    vesselName: "",
    departsFrom: "",
    arrivesAt: "",
    departure_time: "",
    vessel_eta: "",
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
    depart_from_port: null
    //arrive_at_port: null
  };

  componentDidMount() {
    const headerObject = {
      // method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN1cGVydXNlciIsImlhdCI6MTU3MTM4MTI0NSwiZXhwIjoxNTcxNDE3MjQ1fQ.AWtUrRse7Q2_Z0FC0zcAqK1r2BR8BVBCaUz4Snc3Iy0"
      }
    };
    console.log("Inside the component didcomponent");
    axios
      .get(`/api/voyages/${this.state.voyageId}/vessel-reports`, headerObject)
      .then(resp => (resp = resp.data))
      .then(reportsArr => {
        axios
          .get(
            `/api/vessel-reports/${reportsArr[0].id}/suggested-routes`,
            headerObject
          )
          .then(data => (data = data.data))
          .then(suggestedRoute => {
            this.setState({
              suggested_routes: suggestedRoute,
              vessel_report: reportsArr,
              vessel_report_id: reportsArr[0].id,
              vessel_eta: reportsArr[0].eta,
              longitude: reportsArr[0].longitude,
              latitude: reportsArr[0].latitude,
              selected_route_id: reportsArr[0].selected_route_id,
              hfo_comsumption: reportsArr[0].hfo_consumption,
              lsfo_comsumption: reportsArr[0].lsfo_consumption,
              date: reportsArr[0].created_at,
              hsfo: suggestedRoute[0].hfo,
              ulsfo: suggestedRoute[0].lsfo,
              hfo: suggestedRoute[0].hfo,
              lsfo: suggestedRoute[0].lsfo,
              totalcost: suggestedRoute[0].total_cost
            });
          });
        axios
          .get(
            `/api/suggested-routes/${reportsArr[0].selected_route_id}`,
            headerObject
          )
          .then(res => (res = res.data))
          .then(selectedRoute => {
            this.setState({
              selected_route_table: selectedRoute[0].waypoints
            });
          });
      });

    axios
      .get("/api/voyages/", headerObject)
      .then(resp => (resp = resp.data))
      .then(voyageArr =>
        voyageArr.filter(voyage => voyage.id === parseInt(this.state.voyageId))
      )
      .then(voyageobj => {
        console.log("voyajeobj", voyageobj);
        axios
          .get(`/api/vessels/${voyageobj[0].vessel_id}/`, headerObject)
          .then(res => (res = res.data))
          .then(vesselobj => {
            this.setState({
              vesselName: vesselobj[0].name,
              departure_time: voyageobj[0].departure_time,
              hfocosts: voyageobj[0].hfocost,
              lsfocosts: voyageobj[0].lsfocost,
              vessel_id: voyageobj[0].vessel_id,
              depart_from_port: voyageobj[0].depart_from_port,
              arrive_at_port: voyageobj[0].arrive_at_port
            });
          });
        axios
          .get(`/api/ports/${voyageobj[0].depart_from_port}/`, headerObject)
          .then(res => (res = res.data))
          .then(portobj =>
            this.setState({
              departsFrom: portobj[0].name
            })
          );

        axios
          .get(`/api/ports/${voyageobj[0].arrive_at_port}/`, headerObject)
          .then(res => (res = res.data))
          .then(portobj =>
            this.setState({
              arrivesAt: portobj[0].name
            })
          );
      });
  }

  render() {
    // console.log(this.state.selected_route_table);
    const {
      vesselName,
      departsFrom,
      arrivesAt,
      departure_time,
      vessel_eta,
      date,
      hsfo,
      lsfo,
      hfocosts,
      lsfocosts,
      hfo_comsumption,
      lsfo_comsumption,
      totalcost,
      selected_route_table
    } = this.state;
    let latitude = parseInt(this.state.latitude);
    let longitude = parseInt(this.state.longitude);
    let suggestedRouteTableFiltered = selected_route_table.map(
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

    return (
      <>
        <VoyageDetails
          vesselName={vesselName}
          departureFrom={departsFrom}
          arrivesAt={arrivesAt}
          etd={departure_time}
          eta={vessel_eta}
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
          hfoConsumption={hfo_comsumption}
          lsfoConsumption={lsfo_comsumption}
        />
        <SuggestedRouteTable />
      </>
    );
  }
}
