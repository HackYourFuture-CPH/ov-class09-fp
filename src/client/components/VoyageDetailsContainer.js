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
    suggested_route_id: []
  };
  componentDidMount() {
    const headerObject = {
      // method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN1cGVydXNlciIsImlhdCI6MTU3MTI1MjM3NCwiZXhwIjoxNTcxMjg4Mzc0fQ.iYsferWTr1pKoXXtUdhF3N52cHFaYUBjUllK2OxeA7k"
      }
    };
    console.log("Inside the component didcomponent");
    axios
      .get(`/api/voyages/${this.state.voyageId}/vessel-reports`, headerObject)
      .then(data => (data = data.data))
      .then(data =>
        this.setState({
          vessel_report: data,
          vessel_report_id: data.map(({ id }) => id)
        })
      );

    axios
      .get("/api/vessel-reports/956/suggested-routes", headerObject)
      .then(data => (data = data.data))
      .then(data =>
        this.setState({
          suggested_routes: data,
          suggested_routes_id: data.map(({ id }) => id)
        })
      );

    /*  
     axios
      .get(
        `/api/vessel-reports/${
          this.state.vessel_report_id[0]
        }/suggested-routes`,
        headerObject
      )
      .then()
      .then(data =>
        this.setState({
          suggested_routes: data.data
        })
      );*/
  }
  render() {
    console.log(this.state);
    //console.log(this.state.vessel_report_id[0]);

    /* vesselName,-voyages
    departsFrom,-voyages
    arrivesAt,--vessel report
    departure_time,--voyage
    target_arrival_time,---voyage
    date, --vessel report
    latitude,---vessel report
    longitude, ---vessel report
    hsfo,---suggested route
    ulsfo-- suggested route*/

    /* hfo -- suggested_routes
    lsfo -- suggested_routes
    hfocosts --- voyageId
    lsfocosts---voyageId
    totalcost ---suggested_route
    */

    /*
    created -vessel report/waypoints
    lon -vessel report/waypoints
    lat -vessel report/waypoints
    speed -vessel report/waypoints
    rpm--/waypoints
    */
    return (
      <div>
        <VoyageDetails
          vesselName={vesselName}
          departureFrom={departsFrom}
          arrivesAt={arrivesAt}
          etd={etd}
          eta={eta}
          date={date}
          latitude={latitude}
          longitude={longitude}
          hsfo={hsfo}
          ulsfo={ulsfo}
        />

        <CostWidget
          totalCost={number("Total Cost", 200)}
          hfoCost={number("hfo Cost", 10)}
          lsfoCost={number("lsfo Cost", 10)}
          hfoConsumption={number("hfo Consumption", 10)}
          lsfoConsumption={number("lsfo Consumption", 10)}
        />
        <SuggestedRouteTable
          data={data}
          tableNames={["DATE", "LATITUDE", "LONGTIDUE", "SPEED", "EST.RPM"]}
        />
        <h1>Map Component</h1>
      </div>
    );
  }
}
